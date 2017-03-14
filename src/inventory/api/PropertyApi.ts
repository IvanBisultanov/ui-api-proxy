/**
 * Apaleo Inventory API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional, LOCALE_ID }           from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import * as Rx                                               from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../../variables';
import { IRequestOptions, ResponseModel, ResponseHeaders }   from '../../models';
import { Configuration }                                     from '../../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class PropertyApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get a property
     * Get a property by code.
     * @param code The code of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesByCodeGet(code: string, languages?: string, $options?: IRequestOptions)
        : Observable<models.PropertyModel | undefined> {
        return this.inventoryV1PropertiesByCodeGetWithRawHttp(code, languages, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a property exists
     * Check if a property exists by code.
     * @param code The code of the property.
     */
    public inventoryV1PropertiesByCodeHead(code: string, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1PropertiesByCodeHeadWithRawHttp(code, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param code The code of the property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesByCodePut(code: string, requestBody: models.ReplacePropertyModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1PropertiesByCodePutWithRawHttp(code, requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesGet(languages?: string, $options?: IRequestOptions)
        : Observable<models.PropertyListModel | undefined> {
        return this.inventoryV1PropertiesGetWithRawHttp(languages, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesPost(requestBody: models.CreatePropertyModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1PropertiesPostWithRawHttp(requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get a property
     * Get a property by code.
     * @param code The code of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesByCodeGetWithRawHttp(code: string, languages?: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.PropertyModel>> {
        return this.inventoryV1PropertiesByCodeGetWithHttpInfo(code, languages, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a property exists
     * Check if a property exists by code.
     * @param code The code of the property.
     */
    public inventoryV1PropertiesByCodeHeadWithRawHttp(code: string, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1PropertiesByCodeHeadWithHttpInfo(code, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param code The code of the property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesByCodePutWithRawHttp(code: string, requestBody: models.ReplacePropertyModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1PropertiesByCodePutWithHttpInfo(code, requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesGetWithRawHttp(languages?: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.PropertyListModel>> {
        return this.inventoryV1PropertiesGetWithHttpInfo(languages, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesPostWithRawHttp(requestBody: models.CreatePropertyModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1PropertiesPostWithHttpInfo(requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get a property
     * Get a property by code.
     * @param code The code of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private inventoryV1PropertiesByCodeGetWithHttpInfo(code: string, languages?: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties/${code}'
                    .replace('${' + 'code' + '}', String(code));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling inventoryV1PropertiesByCodeGet.');
        }
        if (languages !== undefined) {
            queryParameters.set('languages', <any>languages);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let retryTimes = this.configuration.retryPolicy.defaultRetryTimes;
        let isResponseCodeAllowed: (code: number) => boolean = () => false;
        let requestOptionsInterceptor = (r: RequestOptionsArgs) => (new RequestOptions(r)) as RequestOptionsArgs;

        if ($options) {
            if ($options.retryTimes !== undefined) {
                retryTimes = $options.retryTimes;
            }
            
            if ($options.allowResponseCodes) {
                if (typeof $options.allowResponseCodes === 'function') {
                    isResponseCodeAllowed = $options.allowResponseCodes;
                } else {
                    const allowedResponseCodes = $options.allowResponseCodes;
                    isResponseCodeAllowed = code => allowedResponseCodes.indexOf(code) !== -1;
                }
            }
            
            if ($options.ifMatch && $options.ifNoneMatch) {
                throw Error('You cannot specify ifMatch AND ifNoneMatch on one request.')
            } else if ($options.ifMatch) {
                headers.set('If-Match', $options.ifMatch);
            } else if ($options.ifNoneMatch) {
                headers.set('If-None-Match', $options.ifNoneMatch);
            }

            if ($options.additionalHeaders) {
                for (const key in $options.additionalHeaders) {
                    if ($options.additionalHeaders.hasOwnProperty(key)) {
                        headers.set(key, $options.additionalHeaders[key]);
                    }
                }
            }

            if ($options.customInterceptor) {
                requestOptionsInterceptor = $options.customInterceptor;
            }
        }

        let requestOptions: RequestOptionsArgs = requestOptionsInterceptor({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        return this.http.request(path, requestOptions).catch(err => {
            if (err instanceof Response) {
                if (isResponseCodeAllowed(err.status)) {
                    return Rx.Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Rx.Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1PropertiesByCodeGetWithHttpInfo(code, languages, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Check if a property exists
     * Check if a property exists by code.
     * @param code The code of the property.
     */
    private inventoryV1PropertiesByCodeHeadWithHttpInfo(code: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties/${code}'
                    .replace('${' + 'code' + '}', String(code));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling inventoryV1PropertiesByCodeHead.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let retryTimes = this.configuration.retryPolicy.defaultRetryTimes;
        let isResponseCodeAllowed: (code: number) => boolean = () => false;
        let requestOptionsInterceptor = (r: RequestOptionsArgs) => (new RequestOptions(r)) as RequestOptionsArgs;

        if ($options) {
            if ($options.retryTimes !== undefined) {
                retryTimes = $options.retryTimes;
            }
            
            if ($options.allowResponseCodes) {
                if (typeof $options.allowResponseCodes === 'function') {
                    isResponseCodeAllowed = $options.allowResponseCodes;
                } else {
                    const allowedResponseCodes = $options.allowResponseCodes;
                    isResponseCodeAllowed = code => allowedResponseCodes.indexOf(code) !== -1;
                }
            }
            
            if ($options.ifMatch && $options.ifNoneMatch) {
                throw Error('You cannot specify ifMatch AND ifNoneMatch on one request.')
            } else if ($options.ifMatch) {
                headers.set('If-Match', $options.ifMatch);
            } else if ($options.ifNoneMatch) {
                headers.set('If-None-Match', $options.ifNoneMatch);
            }

            if ($options.additionalHeaders) {
                for (const key in $options.additionalHeaders) {
                    if ($options.additionalHeaders.hasOwnProperty(key)) {
                        headers.set(key, $options.additionalHeaders[key]);
                    }
                }
            }

            if ($options.customInterceptor) {
                requestOptionsInterceptor = $options.customInterceptor;
            }
        }

        let requestOptions: RequestOptionsArgs = requestOptionsInterceptor({
            method: RequestMethod.Head,
            headers: headers,
            search: queryParameters
        });

        return this.http.request(path, requestOptions).catch(err => {
            if (err instanceof Response) {
                if (isResponseCodeAllowed(err.status)) {
                    return Rx.Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Rx.Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1PropertiesByCodeHeadWithHttpInfo(code, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param code The code of the property.
     * @param requestBody The definition of the property.
     */
    private inventoryV1PropertiesByCodePutWithHttpInfo(code: string, requestBody: models.ReplacePropertyModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties/${code}'
                    .replace('${' + 'code' + '}', String(code));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling inventoryV1PropertiesByCodePut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1PropertiesByCodePut.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'text/json', 
            'application/json-patch+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let retryTimes = this.configuration.retryPolicy.defaultRetryTimes;
        let isResponseCodeAllowed: (code: number) => boolean = () => false;
        let requestOptionsInterceptor = (r: RequestOptionsArgs) => (new RequestOptions(r)) as RequestOptionsArgs;

        if ($options) {
            if ($options.retryTimes !== undefined) {
                retryTimes = $options.retryTimes;
            }
            
            if ($options.allowResponseCodes) {
                if (typeof $options.allowResponseCodes === 'function') {
                    isResponseCodeAllowed = $options.allowResponseCodes;
                } else {
                    const allowedResponseCodes = $options.allowResponseCodes;
                    isResponseCodeAllowed = code => allowedResponseCodes.indexOf(code) !== -1;
                }
            }
            
            if ($options.ifMatch && $options.ifNoneMatch) {
                throw Error('You cannot specify ifMatch AND ifNoneMatch on one request.')
            } else if ($options.ifMatch) {
                headers.set('If-Match', $options.ifMatch);
            } else if ($options.ifNoneMatch) {
                headers.set('If-None-Match', $options.ifNoneMatch);
            }

            if ($options.additionalHeaders) {
                for (const key in $options.additionalHeaders) {
                    if ($options.additionalHeaders.hasOwnProperty(key)) {
                        headers.set(key, $options.additionalHeaders[key]);
                    }
                }
            }

            if ($options.customInterceptor) {
                requestOptionsInterceptor = $options.customInterceptor;
            }
        }

        let requestOptions: RequestOptionsArgs = requestOptionsInterceptor({
            method: RequestMethod.Put,
            headers: headers,
            body: requestBody == null ? '' : JSON.stringify(requestBody), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        return this.http.request(path, requestOptions).catch(err => {
            if (err instanceof Response) {
                if (isResponseCodeAllowed(err.status)) {
                    return Rx.Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Rx.Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1PropertiesByCodePutWithHttpInfo(code, requestBody, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private inventoryV1PropertiesGetWithHttpInfo(languages?: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (languages !== undefined) {
            queryParameters.set('languages', <any>languages);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let retryTimes = this.configuration.retryPolicy.defaultRetryTimes;
        let isResponseCodeAllowed: (code: number) => boolean = () => false;
        let requestOptionsInterceptor = (r: RequestOptionsArgs) => (new RequestOptions(r)) as RequestOptionsArgs;

        if ($options) {
            if ($options.retryTimes !== undefined) {
                retryTimes = $options.retryTimes;
            }
            
            if ($options.allowResponseCodes) {
                if (typeof $options.allowResponseCodes === 'function') {
                    isResponseCodeAllowed = $options.allowResponseCodes;
                } else {
                    const allowedResponseCodes = $options.allowResponseCodes;
                    isResponseCodeAllowed = code => allowedResponseCodes.indexOf(code) !== -1;
                }
            }
            
            if ($options.ifMatch && $options.ifNoneMatch) {
                throw Error('You cannot specify ifMatch AND ifNoneMatch on one request.')
            } else if ($options.ifMatch) {
                headers.set('If-Match', $options.ifMatch);
            } else if ($options.ifNoneMatch) {
                headers.set('If-None-Match', $options.ifNoneMatch);
            }

            if ($options.additionalHeaders) {
                for (const key in $options.additionalHeaders) {
                    if ($options.additionalHeaders.hasOwnProperty(key)) {
                        headers.set(key, $options.additionalHeaders[key]);
                    }
                }
            }

            if ($options.customInterceptor) {
                requestOptionsInterceptor = $options.customInterceptor;
            }
        }

        let requestOptions: RequestOptionsArgs = requestOptionsInterceptor({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        return this.http.request(path, requestOptions).catch(err => {
            if (err instanceof Response) {
                if (isResponseCodeAllowed(err.status)) {
                    return Rx.Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Rx.Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1PropertiesGetWithHttpInfo(languages, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    private inventoryV1PropertiesPostWithHttpInfo(requestBody: models.CreatePropertyModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1PropertiesPost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'text/json', 
            'application/json-patch+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let retryTimes = this.configuration.retryPolicy.defaultRetryTimes;
        let isResponseCodeAllowed: (code: number) => boolean = () => false;
        let requestOptionsInterceptor = (r: RequestOptionsArgs) => (new RequestOptions(r)) as RequestOptionsArgs;

        if ($options) {
            if ($options.retryTimes !== undefined) {
                retryTimes = $options.retryTimes;
            }
            
            if ($options.allowResponseCodes) {
                if (typeof $options.allowResponseCodes === 'function') {
                    isResponseCodeAllowed = $options.allowResponseCodes;
                } else {
                    const allowedResponseCodes = $options.allowResponseCodes;
                    isResponseCodeAllowed = code => allowedResponseCodes.indexOf(code) !== -1;
                }
            }
            
            if ($options.ifMatch && $options.ifNoneMatch) {
                throw Error('You cannot specify ifMatch AND ifNoneMatch on one request.')
            } else if ($options.ifMatch) {
                headers.set('If-Match', $options.ifMatch);
            } else if ($options.ifNoneMatch) {
                headers.set('If-None-Match', $options.ifNoneMatch);
            }

            if ($options.additionalHeaders) {
                for (const key in $options.additionalHeaders) {
                    if ($options.additionalHeaders.hasOwnProperty(key)) {
                        headers.set(key, $options.additionalHeaders[key]);
                    }
                }
            }

            if ($options.customInterceptor) {
                requestOptionsInterceptor = $options.customInterceptor;
            }
        }

        let requestOptions: RequestOptionsArgs = requestOptionsInterceptor({
            method: RequestMethod.Post,
            headers: headers,
            body: requestBody == null ? '' : JSON.stringify(requestBody), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        return this.http.request(path, requestOptions).catch(err => {
            if (err instanceof Response) {
                if (isResponseCodeAllowed(err.status)) {
                    return Rx.Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Rx.Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1PropertiesPostWithHttpInfo(requestBody, $options));
                }
            }
            throw err;
        });
    }

}
