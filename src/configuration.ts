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
    retryPolicy: IRetryPolicy;
    logResponse: boolean;
}
