/**
 * Apaleo Rates API
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
export class RateplanApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    public ratesV1RateplansByIdDelete(id: string, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RateplansByIdDeleteWithRawHttp(id, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a rateplan
     * Get a rateplan by code.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public ratesV1RateplansByIdGet(id: string, languages?: string, $options?: IRequestOptions)
        : Observable<models.RateplanModel | undefined> {
        return this.ratesV1RateplansByIdGetWithRawHttp(id, languages, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    public ratesV1RateplansByIdHead(id: string, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RateplansByIdHeadWithRawHttp(id, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RateplansByIdPut(id: string, requestBody: models.ReplaceRateplanModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RateplansByIdPutWithRawHttp(id, requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public ratesV1RateplansGet(languages?: string, $options?: IRequestOptions)
        : Observable<models.RateplanListModel | undefined> {
        return this.ratesV1RateplansGetWithRawHttp(languages, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RateplansPost(requestBody: models.CreateRateplanModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RateplansPostWithRawHttp(requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    public ratesV1RateplansByIdDeleteWithRawHttp(id: string, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RateplansByIdDeleteWithHttpInfo(id, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a rateplan
     * Get a rateplan by code.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public ratesV1RateplansByIdGetWithRawHttp(id: string, languages?: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.RateplanModel>> {
        return this.ratesV1RateplansByIdGetWithHttpInfo(id, languages, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    public ratesV1RateplansByIdHeadWithRawHttp(id: string, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RateplansByIdHeadWithHttpInfo(id, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RateplansByIdPutWithRawHttp(id: string, requestBody: models.ReplaceRateplanModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RateplansByIdPutWithHttpInfo(id, requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public ratesV1RateplansGetWithRawHttp(languages?: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.RateplanListModel>> {
        return this.ratesV1RateplansGetWithHttpInfo(languages, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RateplansPostWithRawHttp(requestBody: models.CreateRateplanModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RateplansPostWithHttpInfo(requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    private ratesV1RateplansByIdDeleteWithHttpInfo(id: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/rateplans/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RateplansByIdDelete.');
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
            method: RequestMethod.Delete,
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
                        this.ratesV1RateplansByIdDeleteWithHttpInfo(id, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Get a rateplan
     * Get a rateplan by code.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private ratesV1RateplansByIdGetWithHttpInfo(id: string, languages?: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/rateplans/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RateplansByIdGet.');
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
                        this.ratesV1RateplansByIdGetWithHttpInfo(id, languages, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    private ratesV1RateplansByIdHeadWithHttpInfo(id: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/rateplans/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RateplansByIdHead.');
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
                        this.ratesV1RateplansByIdHeadWithHttpInfo(id, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    private ratesV1RateplansByIdPutWithHttpInfo(id: string, requestBody: models.ReplaceRateplanModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/rateplans/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RateplansByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesV1RateplansByIdPut.');
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
                        this.ratesV1RateplansByIdPutWithHttpInfo(id, requestBody, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private ratesV1RateplansGetWithHttpInfo(languages?: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/rateplans';

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
                        this.ratesV1RateplansGetWithHttpInfo(languages, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan.
     * @param requestBody The definition of the rateplan.
     */
    private ratesV1RateplansPostWithHttpInfo(requestBody: models.CreateRateplanModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/rateplans';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesV1RateplansPost.');
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
                        this.ratesV1RateplansPostWithHttpInfo(requestBody, $options));
                }
            }
            throw err;
        });
    }

}
