import { Response, RequestOptionsArgs } from '@angular/http';

export interface IRequestOptions {
    allowResponseCodes?: number[] | ((status: number) => boolean);
    retryTimes?: number;
    ifMatch?: string;
    ifNoneMatch?: string;
    additionalHeaders?: { [key: string]: (string | string[]) };
    customInterceptor?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
}

const regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})(\.(\d{1,}))?(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

export class ResponseModel<T> {
    public readonly $headers: ResponseHeaders;
    public readonly $isEmpty: boolean;

    constructor(private readonly response: Response) {
        this.$headers = new ResponseHeaders(response);

        if (this.$headers.isJson) {
            Object.assign(this, this.parseDateInJson(response.json()));
            this.$isEmpty = false;
        } else {
            this.$isEmpty = true;
        }
    }

    public get $raw(): string {
        return this.response.text();
    }

    public $hasValue(me: (ResponseModel<T> & T) | ResponseModel<T>): me is (ResponseModel<T> & T) {
        return !me.$isEmpty;
    }

    private parseDateInJson(input: any) {
        if (typeof input !== "object") return input;

        for (const key in input) {
            if (!input.hasOwnProperty(key)) continue;

            const value = input[key];
            let match: RegExpMatchArray | null;
            // Check for string properties which look like dates.
            if (typeof value === "string" && (match = value.match(regexIso8601))) {
                const milliseconds = Date.parse(match[0])
                if (!isNaN(milliseconds)) {
                    input[key] = new Date(milliseconds);
                }
            } else if (typeof value === "object") {
                // Recurse into object
                this.parseDateInJson(value);
            }
        }
        return input;
    }
}

export class ResponseHeaders {
    constructor(private readonly response: Response) { }

    public get statusCode(): number {
        return this.response.status;
    }

    public get statusText(): string | null {
        return this.response.statusText;
    }

    public get isOk(): boolean {
        return this.response.ok;
    }

    public get isJson(): boolean {
        let contentType: string | null = this.response.headers.get('content-type');

        if (contentType) {
            contentType = contentType.toLowerCase();

            return contentType.indexOf('application/json') !== -1 || contentType.indexOf('text/json') !== -1;
        } else {
            return false;
        }
    }

    public get etag(): string | null {
        return this.response.headers.get('etag');
    }

    public get location(): string | null {
        return this.response.headers.get('location');
    }
}
