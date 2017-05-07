import { Response, RequestOptionsArgs } from '@angular/http';

export interface IRequestOptions {
    allowResponseCodes?: number[] | ((status: number) => boolean);
    retryTimes?: number;
    ifMatch?: string;
    ifNoneMatch?: string;
    doNotReplayRequest?: boolean;
    additionalHeaders?: { [key: string]: (string | string[]) };
    customInterceptor?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
}

// Regular Expressions explained:
// year:     /[12]\d{3}/
// month:    /(0[1-9])|(1[012])/
// day:      /(0[1-9])|([12]\d)|(3[01])/
// hour:     /([01]\d)|(2[0123])/
// minute:   /[0-5]\d/
// second:   /[0-5]\d/
// ms:       /\.\d{1,}/
// timezone: /Z|([\-+]([01]\d)|(2[0123]):[0-5]\d)/

const regexIso8601OrSimilar = 
    /^[12]\d{3}-((0[1-9])|(1[012]))-((0[1-9])|([12]\d)|(3[01]))(T(([01]\d)|(2[0123])):[0-5]\d:[0-5]\d(\.\d{1,})?(Z|([\-+](([01]\d)|(2[0123])):[0-5]\d))?)?$/

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
            if (typeof value === "string" && (match = value.match(regexIso8601OrSimilar))) {
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
        let contentType = this.getHeader('content-type');

        if (contentType) {
            contentType = contentType.toLowerCase();

            return contentType.indexOf('application/json') !== -1 || contentType.indexOf('text/json') !== -1;
        }

        return false;
    }

    public get etag(): string | null {
        return this.getHeader('etag');
    }

    public get location(): string | null {
        return this.getHeader('location');
    }

    public getHeader(name: string): string | null {
        const headers = this.response.headers;

        if (headers) {
            return headers.get(name);
        } else {
            return null;
        }
    }
}
