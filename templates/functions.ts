import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { 
    ValidatorFn, 
    Validators, 
    FormGroup } from '@angular/forms';
import { 
    IControlFactoryOptions, 
    FormGroupControls, 
    IBuildFormOptions, 
    Control, 
    IApaleoAbstractControl, 
    IApaleoControlMetaData } from './types';
import { Configuration, IRetryPolicy } from 'configuration';
import { 
    Http, 
    Headers, 
    RequestOptionsArgs, 
    RequestOptions,
    Response } from '@angular/http';
import { IRequestOptions } from 'models';
import { Observable } from 'rxjs/Rx';

export function getControl<T>(validators: ValidatorFn[], options?: IControlFactoryOptions<T>): [T | undefined, ValidatorFn] {
    const finalValidators = [...validators];
    let defaultValue: T | undefined = undefined;

    if (options) {
        defaultValue = options.defaultValue;

        if (options.additionalValidators) {
            finalValidators.push(...options.additionalValidators);
        }
    }
    return [defaultValue, Validators.compose(finalValidators)];
}

export function getControlOptions<T, K extends keyof T>(options: IBuildFormOptions<T> | undefined, property: K) {
    options = options || {};
    let co: IControlFactoryOptions<T[K]> = {};

    if (options.controlOptions) {
        co = options.controlOptions[property] || {};
    }
    if (options.additionalValidators) {
        const additionalValidators = options.additionalValidators[property] || [];

        if (co.additionalValidators) {
            co.additionalValidators.push(...additionalValidators);
        } else {
            co.additionalValidators = additionalValidators;
        }
    }
    if (co.defaultValue === undefined && options.defaultValues) {
        co.defaultValue = options.defaultValues[property];
    }
    return co;
}

export function adjustDefaultControls<T>(defaultControls: FormGroupControls<T>, options?: IBuildFormOptions<T>) {
    if (!options) { return defaultControls; }

    defaultControls = cleanUpDefaultControls(defaultControls, options);
    return Object.assign(defaultControls, options.overwriteControls, convertAdditionalControls(options.additionalControls));
}

export function setMetaData(control?: IApaleoAbstractControl, metaData?: IApaleoControlMetaData) {
    if (control) {
        control.apaleoMetaData = metaData || {};
    }
}

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
    config.retryPolicy = config.retryPolicy || defaultRetryPolicy;

    let retryTimes = config.retryPolicy.defaultRetryTimes;
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

    const requestOptions: RequestOptionsArgs = requestOptionsInterceptor(requestOptionsArgs);

    return http.request(path, requestOptions)
        .map(r => responseInterceptor(requestOptionsArgs, r))
        .catch(err => {
            if (err instanceof Response) {
                responseInterceptor(requestOptionsArgs, err);

                if (isResponseCodeAllowed(err.status)) {
                    return Observable.of(err);
                } else if (config.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    return Observable.of(0).delay(config.retryPolicy.delayInMs).mergeMap(() => retryMethod(retryTimes - 1));
                }
            }
            throw err;
        });
}

function cleanUpDefaultControls<T>(defaultControls: FormGroupControls<T>, options: IBuildFormOptions<T>) {
    if (options.onlyInclude || options.skipControls) {
        if (options.onlyInclude && options.skipControls) {
            throw Error('You can either define "onlyInclude" or "skipControls" in IBuildFormOptions but never both.')
        }

        if (options.onlyInclude) {
            const keep = new Set<string>(options.onlyInclude);
            options.skipControls = Object.keys(defaultControls).filter(k => !keep.has(k)) as (keyof T)[];
        }

        for (const key of options.skipControls!) {
            delete defaultControls[key];
        }
    }
    return defaultControls;
}

function convertAdditionalControls(additionalControls?: { [name: string]: (Control<any> | FormGroup | boolean) }) {
    const ret: { [name: string]: (Control<any> | FormGroup) } = {};

    if (!additionalControls) {
        return ret;
    }

    for (const ctrl in additionalControls) {
        if (additionalControls.hasOwnProperty(ctrl)) {
            const ac = additionalControls[ctrl];

            if (typeof ac === 'boolean') {
                ret[ctrl] = [undefined, undefined];
            } else {
                ret[ctrl] = ac;
            }
        }
    }

    return ret;
}
