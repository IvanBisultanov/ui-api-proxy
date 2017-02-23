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
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../../variables';
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
     * @param apaleoAccount Account Code
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesByCodeGet(code: string, apaleoAccount: string, languages?: string, extraHttpRequestParams?: any): Observable<models.PropertyModel> {
        return this.inventoryV1PropertiesByCodeGetWithHttpInfo(code, apaleoAccount, languages, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Check if a property exists
     * Check if a property exists by code.
     * @param code The code of the property.
     * @param apaleoAccount Account Code
     */
    public inventoryV1PropertiesByCodeHead(code: string, apaleoAccount: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.inventoryV1PropertiesByCodeHeadWithHttpInfo(code, apaleoAccount, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param code The code of the property.
     * @param requestBody The definition of the property.
     * @param apaleoAccount Account Code
     */
    public inventoryV1PropertiesByCodePut(code: string, requestBody: models.UpdatePropertyModel, apaleoAccount: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.inventoryV1PropertiesByCodePutWithHttpInfo(code, requestBody, apaleoAccount, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param apaleoAccount Account Code
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesGet(apaleoAccount: string, languages?: string, extraHttpRequestParams?: any): Observable<models.PropertyListModel> {
        return this.inventoryV1PropertiesGetWithHttpInfo(apaleoAccount, languages, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     * @param apaleoAccount Account Code
     */
    public inventoryV1PropertiesPost(requestBody: models.PropertyModel, apaleoAccount: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.inventoryV1PropertiesPostWithHttpInfo(requestBody, apaleoAccount, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get a property
     * Get a property by code.
     * @param code The code of the property.
     * @param apaleoAccount Account Code
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesByCodeGetWithHttpInfo(code: string, apaleoAccount: string, languages?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/inventory/v1/properties/${code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling inventoryV1PropertiesByCodeGet.');
        }
        // verify required parameter 'apaleoAccount' is not null or undefined
        if (apaleoAccount === null || apaleoAccount === undefined) {
            throw new Error('Required parameter apaleoAccount was null or undefined when calling inventoryV1PropertiesByCodeGet.');
        }
        if (languages !== undefined) {
            if(<any>languages instanceof Date) {
                queryParameters.set('languages', (<Date><any>languages).toISOString());
            } else {
                queryParameters.set('languages', <any>languages);
            }
        }

        headers.set('Apaleo-Account', String(apaleoAccount));

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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Check if a property exists
     * Check if a property exists by code.
     * @param code The code of the property.
     * @param apaleoAccount Account Code
     */
    public inventoryV1PropertiesByCodeHeadWithHttpInfo(code: string, apaleoAccount: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/inventory/v1/properties/${code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling inventoryV1PropertiesByCodeHead.');
        }
        // verify required parameter 'apaleoAccount' is not null or undefined
        if (apaleoAccount === null || apaleoAccount === undefined) {
            throw new Error('Required parameter apaleoAccount was null or undefined when calling inventoryV1PropertiesByCodeHead.');
        }
        headers.set('Apaleo-Account', String(apaleoAccount));

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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Head,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param code The code of the property.
     * @param requestBody The definition of the property.
     * @param apaleoAccount Account Code
     */
    public inventoryV1PropertiesByCodePutWithHttpInfo(code: string, requestBody: models.UpdatePropertyModel, apaleoAccount: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/inventory/v1/properties/${code}`;

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
        // verify required parameter 'apaleoAccount' is not null or undefined
        if (apaleoAccount === null || apaleoAccount === undefined) {
            throw new Error('Required parameter apaleoAccount was null or undefined when calling inventoryV1PropertiesByCodePut.');
        }
        headers.set('Apaleo-Account', String(apaleoAccount));

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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: requestBody == null ? '' : JSON.stringify(requestBody), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param apaleoAccount Account Code
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesGetWithHttpInfo(apaleoAccount: string, languages?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/inventory/v1/properties`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'apaleoAccount' is not null or undefined
        if (apaleoAccount === null || apaleoAccount === undefined) {
            throw new Error('Required parameter apaleoAccount was null or undefined when calling inventoryV1PropertiesGet.');
        }
        if (languages !== undefined) {
            if(<any>languages instanceof Date) {
                queryParameters.set('languages', (<Date><any>languages).toISOString());
            } else {
                queryParameters.set('languages', <any>languages);
            }
        }

        headers.set('Apaleo-Account', String(apaleoAccount));

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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     * @param apaleoAccount Account Code
     */
    public inventoryV1PropertiesPostWithHttpInfo(requestBody: models.PropertyModel, apaleoAccount: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/inventory/v1/properties`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1PropertiesPost.');
        }
        // verify required parameter 'apaleoAccount' is not null or undefined
        if (apaleoAccount === null || apaleoAccount === undefined) {
            throw new Error('Required parameter apaleoAccount was null or undefined when calling inventoryV1PropertiesPost.');
        }
        headers.set('Apaleo-Account', String(apaleoAccount));

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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: requestBody == null ? '' : JSON.stringify(requestBody), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
