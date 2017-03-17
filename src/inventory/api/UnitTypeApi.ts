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

import { Observable }                                        from 'rxjs/Rx';
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
export class UnitTypeApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Delete a unit type
     * Use this call to delete a unit type.
     * @param id The id of the unit type.
     */
    public inventoryV1UnitTypesByIdDelete(id: string, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1UnitTypesByIdDeleteWithRawHttp(id, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a unit type
     * Get a unit type by id.
     * @param id The id of the unit type.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1UnitTypesByIdGet(id: string, languages?: string, $options?: IRequestOptions)
        : Observable<models.UnitTypeModel | undefined> {
        return this.inventoryV1UnitTypesByIdGetWithRawHttp(id, languages, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a unit type exists
     * Check if a unit type exists by id.
     * @param id The id of the unit type.
     */
    public inventoryV1UnitTypesByIdHead(id: string, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1UnitTypesByIdHeadWithRawHttp(id, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replace a unit type
     * Use this call to modify a unit type.
     * @param id The id of the unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryV1UnitTypesByIdPut(id: string, requestBody: models.ReplaceUnitTypeModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1UnitTypesByIdPutWithRawHttp(id, requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a unit type list
     * Get the list of unit types.
     */
    public inventoryV1UnitTypesGet($options?: IRequestOptions)
        : Observable<models.UnitTypeListModel | undefined> {
        return this.inventoryV1UnitTypesGetWithRawHttp($options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Create a unit type
     * Use this call to create a new unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryV1UnitTypesPost(requestBody: models.CreateUnitTypeModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1UnitTypesPostWithRawHttp(requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Delete a unit type
     * Use this call to delete a unit type.
     * @param id The id of the unit type.
     */
    public inventoryV1UnitTypesByIdDeleteWithRawHttp(id: string, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1UnitTypesByIdDeleteWithHttpInfo(id, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a unit type
     * Get a unit type by id.
     * @param id The id of the unit type.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1UnitTypesByIdGetWithRawHttp(id: string, languages?: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.UnitTypeModel>> {
        return this.inventoryV1UnitTypesByIdGetWithHttpInfo(id, languages, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a unit type exists
     * Check if a unit type exists by id.
     * @param id The id of the unit type.
     */
    public inventoryV1UnitTypesByIdHeadWithRawHttp(id: string, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1UnitTypesByIdHeadWithHttpInfo(id, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replace a unit type
     * Use this call to modify a unit type.
     * @param id The id of the unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryV1UnitTypesByIdPutWithRawHttp(id: string, requestBody: models.ReplaceUnitTypeModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1UnitTypesByIdPutWithHttpInfo(id, requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a unit type list
     * Get the list of unit types.
     */
    public inventoryV1UnitTypesGetWithRawHttp($options?: IRequestOptions)
        : Observable<ResponseModel<models.UnitTypeListModel>> {
        return this.inventoryV1UnitTypesGetWithHttpInfo($options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Create a unit type
     * Use this call to create a new unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryV1UnitTypesPostWithRawHttp(requestBody: models.CreateUnitTypeModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1UnitTypesPostWithHttpInfo(requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Delete a unit type
     * Use this call to delete a unit type.
     * @param id The id of the unit type.
     */
    private inventoryV1UnitTypesByIdDeleteWithHttpInfo(id: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/unit_types/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1UnitTypesByIdDelete.');
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
                    return Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1UnitTypesByIdDeleteWithHttpInfo(id, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Get a unit type
     * Get a unit type by id.
     * @param id The id of the unit type.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private inventoryV1UnitTypesByIdGetWithHttpInfo(id: string, languages?: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/unit_types/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1UnitTypesByIdGet.');
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
                    return Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1UnitTypesByIdGetWithHttpInfo(id, languages, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Check if a unit type exists
     * Check if a unit type exists by id.
     * @param id The id of the unit type.
     */
    private inventoryV1UnitTypesByIdHeadWithHttpInfo(id: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/unit_types/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1UnitTypesByIdHead.');
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
                    return Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1UnitTypesByIdHeadWithHttpInfo(id, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Replace a unit type
     * Use this call to modify a unit type.
     * @param id The id of the unit type.
     * @param requestBody The definition of the unit type.
     */
    private inventoryV1UnitTypesByIdPutWithHttpInfo(id: string, requestBody: models.ReplaceUnitTypeModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/unit_types/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1UnitTypesByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1UnitTypesByIdPut.');
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
                    return Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1UnitTypesByIdPutWithHttpInfo(id, requestBody, $options));
                }
            }
            throw err;
        });
    }

    /**
     * Get a unit type list
     * Get the list of unit types.
     */
    private inventoryV1UnitTypesGetWithHttpInfo($options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/unit_types';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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
                    return Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1UnitTypesGetWithHttpInfo($options));
                }
            }
            throw err;
        });
    }

    /**
     * Create a unit type
     * Use this call to create a new unit type.
     * @param requestBody The definition of the unit type.
     */
    private inventoryV1UnitTypesPostWithHttpInfo(requestBody: models.CreateUnitTypeModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/unit_types';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1UnitTypesPost.');
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
                    return Observable.of(err);
                } else if (this.configuration.retryPolicy.shouldRetryOnStatusCode(err.status) && retryTimes > 0) {
                    $options = $options || {};
                    $options.retryTimes = retryTimes - 1;

                    return Observable.of(0).delay(this.configuration.retryPolicy.delayInMs).mergeMap(() =>
                        this.inventoryV1UnitTypesPostWithHttpInfo(requestBody, $options));
                }
            }
            throw err;
        });
    }

}
