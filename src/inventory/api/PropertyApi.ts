/**
 * Inventory Management
 * Setup and manage the account’s properties and all the units to rent out: rooms, parking lots, beds, meeting rooms, etc.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Inject, Injectable, LOCALE_ID }                           from '@angular/core';
import { Http, Headers, URLSearchParams, Response, RequestMethod } from '@angular/http';

import * as models                                                 from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                           from '../../variables';
import { ApaleoRequestOptions, ResponseModel }                     from '../../models';
import { Configuration }                                           from '../../configuration';
import { callApiEndpoint }                                         from '../../functions.api';



export namespace inventoryPropertiesByIdGet {
    export interface Params {
        /**
        * The id of the property.
        */
        id: string;
        /**
        * 'all' or comma separated list of language codes
        */
        languages?: Array<string>;
    }
    
}
export namespace inventoryPropertiesByIdHead {
    export interface Params {
        /**
        * The id of the property.
        */
        id: string;
    }
    
}
export namespace inventoryPropertiesByIdPut {
    export interface Params {
        /**
        * The id of the property.
        */
        id: string;
        /**
        * The definition of the property.
        */
        requestBody: models.ReplacePropertyModel;
    }
    
}
export namespace inventoryPropertiesGet {
    export interface Params {
        /**
        * Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
        */
        pageNumber: number;
        /**
        * Page size
        */
        pageSize: number;
    }
    
}
export namespace inventoryPropertiesPost {
    export interface Params {
        /**
        * The definition of the property.
        */
        requestBody: models.CreatePropertyModel;
    }
    
}

@Injectable()
export class PropertyApi {
    public readonly defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get a property
     * Get a property by id.
     * @param id The id of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryPropertiesByIdGet(params: inventoryPropertiesByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.PropertyModel | undefined> {
        return this.inventoryPropertiesByIdGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a property exists
     * Check if a property exists by id.
     * @param id The id of the property.
     */
    public inventoryPropertiesByIdHead(params: inventoryPropertiesByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryPropertiesByIdHeadWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param id The id of the property.
     * @param requestBody The definition of the property.
     */
    public inventoryPropertiesByIdPut(params: inventoryPropertiesByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryPropertiesByIdPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     */
    public inventoryPropertiesGet(params: inventoryPropertiesGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.PropertyListModel | undefined> {
        return this.inventoryPropertiesGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    public inventoryPropertiesPost(params: inventoryPropertiesPost.Params, $options?: ApaleoRequestOptions)
        : Observable<models.PropertyCreatedModel | undefined> {
        return this.inventoryPropertiesPostWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Return total count of properties
     * Return total count of properties
     */
    public inventoryPropertiescountGet($options?: ApaleoRequestOptions)
        : Observable<models.CountModel | undefined> {
        return this.inventoryPropertiescountGetWithRawHttp($options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get a property
     * Get a property by id.
     * @param id The id of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryPropertiesByIdGetWithRawHttp(params: inventoryPropertiesByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.PropertyModel>> {
        return this.inventoryPropertiesByIdGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a property exists
     * Check if a property exists by id.
     * @param id The id of the property.
     */
    public inventoryPropertiesByIdHeadWithRawHttp(params: inventoryPropertiesByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryPropertiesByIdHeadWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param id The id of the property.
     * @param requestBody The definition of the property.
     */
    public inventoryPropertiesByIdPutWithRawHttp(params: inventoryPropertiesByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryPropertiesByIdPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     */
    public inventoryPropertiesGetWithRawHttp(params: inventoryPropertiesGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.PropertyListModel>> {
        return this.inventoryPropertiesGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    public inventoryPropertiesPostWithRawHttp(params: inventoryPropertiesPost.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.PropertyCreatedModel>> {
        return this.inventoryPropertiesPostWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Return total count of properties
     * Return total count of properties
     */
    public inventoryPropertiescountGetWithRawHttp($options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.CountModel>> {
        return this.inventoryPropertiescountGetWithHttpInfo($options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get a property
     * Get a property by id.
     * @param id The id of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private inventoryPropertiesByIdGetWithHttpInfo(params: inventoryPropertiesByIdGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/properties/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryPropertiesByIdGet.');
        }
        if (params.languages) {
            queryParameters.set('languages', params.languages.join(COLLECTION_FORMATS['csv']));
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

        return callApiEndpoint(
            this.http, 
            path,
            headers,
            {
                method: RequestMethod.Get,
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryPropertiesByIdGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Check if a property exists
     * Check if a property exists by id.
     * @param id The id of the property.
     */
    private inventoryPropertiesByIdHeadWithHttpInfo(params: inventoryPropertiesByIdHead.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/properties/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryPropertiesByIdHead.');
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

        return callApiEndpoint(
            this.http, 
            path,
            headers,
            {
                method: RequestMethod.Head,
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryPropertiesByIdHeadWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param id The id of the property.
     * @param requestBody The definition of the property.
     */
    private inventoryPropertiesByIdPutWithHttpInfo(params: inventoryPropertiesByIdPut.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/properties/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryPropertiesByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryPropertiesByIdPut.');
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

        return callApiEndpoint(
            this.http, 
            path,
            headers,
            {
                method: RequestMethod.Put,
                headers: headers,
                body: params.requestBody == null ? '' : params.requestBody, // https://github.com/angular/angular/issues/10612
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryPropertiesByIdPutWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get a properties list
     * Get the list of properties.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     */
    private inventoryPropertiesGetWithHttpInfo(params: inventoryPropertiesGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/properties';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling inventoryPropertiesGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling inventoryPropertiesGet.');
        }
        if (params.pageNumber !== undefined) {
            queryParameters.set('pageNumber', <any>params.pageNumber);
        }

        if (params.pageSize !== undefined) {
            queryParameters.set('pageSize', <any>params.pageSize);
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

        return callApiEndpoint(
            this.http, 
            path,
            headers,
            {
                method: RequestMethod.Get,
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryPropertiesGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    private inventoryPropertiesPostWithHttpInfo(params: inventoryPropertiesPost.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/properties';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryPropertiesPost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/json-patch+json'
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

        headers.set('Content-Type', 'application/json');

        return callApiEndpoint(
            this.http, 
            path,
            headers,
            {
                method: RequestMethod.Post,
                headers: headers,
                body: params.requestBody == null ? '' : params.requestBody, // https://github.com/angular/angular/issues/10612
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryPropertiesPostWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Return total count of properties
     * Return total count of properties
     */
    private inventoryPropertiescountGetWithHttpInfo($options?: ApaleoRequestOptions): Observable<Response> {

        const path = this.basePath + '/inventory/properties/$count';

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

        return callApiEndpoint(
            this.http, 
            path,
            headers,
            {
                method: RequestMethod.Get,
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryPropertiescountGetWithHttpInfo($options);
            }
        )
    }

}
