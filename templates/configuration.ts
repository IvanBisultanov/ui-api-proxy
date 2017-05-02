import { RequestOptionsArgs, Response } from '@angular/http';

export interface IRetryPolicy {
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
    retryPolicy: IRetryPolicy;
    responseInterceptor: (req: RequestOptionsArgs, res: Response) => Response;
}
