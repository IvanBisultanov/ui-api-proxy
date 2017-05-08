import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';

import { Configuration, IRetryPolicy } from 'configuration';
import { 
    Http, 
    Headers, 
    RequestOptionsArgs, 
    RequestOptions,
    Response } from '@angular/http';
import { IRequestOptions } from 'models';
import { Observable } from 'rxjs/Rx';

const defaultRetryPolicy = Object.freeze({
    defaultRetryTimes: 0,
    delayInMs: 0,
    shouldRetryOnStatusCode: () => false
} as IRetryPolicy)

export function callApiEndpoint(
    http: Http,
    path: string,
    headers: Headers, 
    requestOptionsArgs: RequestOptionsArgs, 
    config: Configuration & IRequestOptions,
    retryMethod: (retryTimesToGo: number) => Observable<Response>
) {
    setHeaders(headers, config);

    const rc = getRequestConfig(config);
    const requestOptions: RequestOptionsArgs = rc.requestOptionsInterceptor(requestOptionsArgs);

    const request = http.request(path, requestOptions)
        .map(r => rc.responseInterceptor(requestOptionsArgs, r))
        .catch(err => {
            if (err instanceof Response) {
                rc.responseInterceptor(requestOptionsArgs, err);

                if (rc.isResponseCodeAllowed(err.status)) {
                    return Observable.of(err);
                } else if (config.retryPolicy.shouldRetryOnStatusCode(err.status) && rc.retryTimes > 0) {
                    return Observable.of(0).delay(config.retryPolicy.delayInMs).mergeMap(() => retryMethod(rc.retryTimes - 1));
                }
            }
            throw err;
        });
    
    if (config.doNotReplayRequest) {
        return request;
    } else {
        return request.publishReplay(1).refCount();
    }
}

function getRequestConfig(config: Configuration & IRequestOptions) {
    const retryPolicy = config.retryPolicy || defaultRetryPolicy;

    let retryTimes = retryPolicy.defaultRetryTimes;
    let isResponseCodeAllowed: (code: number) => boolean = () => false;

    const requestOptionsInterceptor = config.customInterceptor || (r => new RequestOptions(r));
    const responseInterceptor = config.responseInterceptor || ((_, r) => r);

    if (config.retryTimes !== undefined) {
        retryTimes = config.retryTimes;
    }

    if (config.allowResponseCodes) {
        if (typeof config.allowResponseCodes === 'function') {
            isResponseCodeAllowed = config.allowResponseCodes;
        } else {
            const allowedResponseCodes = config.allowResponseCodes;
            isResponseCodeAllowed = code => allowedResponseCodes.indexOf(code) !== -1;
        }
    }

    return {
        requestOptionsInterceptor,
        responseInterceptor,
        isResponseCodeAllowed,
        retryTimes
    }
}

function setHeaders(headers: Headers, config: Configuration & IRequestOptions) {
    if (config.ifMatch && config.ifNoneMatch) {
        throw Error('You cannot specify ifMatch AND ifNoneMatch on one request.')
    } else if (config.ifMatch) {
        headers.set('If-Match', config.ifMatch);
    } else if (config.ifNoneMatch) {
        headers.set('If-None-Match', config.ifNoneMatch);
    }

    if (config.additionalHeaders) {
        for (const key in config.additionalHeaders || {}) {
            if (config.additionalHeaders.hasOwnProperty(key)) {
                headers.set(key, config.additionalHeaders[key]);
            }
        }
    }
}
