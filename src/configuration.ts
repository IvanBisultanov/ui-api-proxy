import { RequestOptionsArgs, Response } from '@angular/http';

export interface RetryPolicy {
    readonly defaultRetryTimes: number;
    readonly delayInMs: number;

    shouldRetryOnStatusCode(status: number): boolean;
}

export class Configuration {
    apiKey: string;
    username: string;
    password: string;
    accessToken: string | (() => string);
    withCredentials: boolean;
    retryPolicy: RetryPolicy;
    responseInterceptor: (req: RequestOptionsArgs, res: Response) => Response;
}
