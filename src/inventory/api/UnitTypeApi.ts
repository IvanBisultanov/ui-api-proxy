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



export namespace inventoryUnitTypesByIdDelete {
    export interface Params {
        /**
        * The id of the unit type.
        */
        id: string;
    }
    
}
export namespace inventoryUnitTypesByIdGet {
    export interface Params {
        /**
        * The id of the unit type.
        */
        id: string;
        /**
        * 'all' or comma separated list of language codes
        */
        languages?: Array<string>;
        /**
        * List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
        */
        expand?: string;
    }
    
}
export namespace inventoryUnitTypesByIdHead {
    export interface Params {
        /**
        * The id of the unit type.
        */
        id: string;
    }
    
}
export namespace inventoryUnitTypesByIdPut {
    export interface Params {
        /**
        * The id of the unit type.
        */
        id: string;
        /**
        * The definition of the unit type.
        */
        requestBody: models.ReplaceUnitTypeModel;
    }
    
}
export namespace inventoryUnitTypesGet {
    export interface Params {
        /**
        * Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
        */
        pageNumber: number;
        /**
        * Page size
        */
        pageSize: number;
        /**
        * Return unit types for specific property
        */
        propertyId?: string;
    }
    
}
export namespace inventoryUnitTypesPost {
    export interface Params {
        /**
        * The definition of the unit type.
        */
        requestBody: models.CreateUnitTypeModel;
    }
    
}
export namespace inventoryUnitTypescountGet {
    export interface Params {
        /**
        * Return unit types for specific property
        */
        propertyId?: string;
    }
    
}

@Injectable()
export class UnitTypeApi {
    public readonly defaultHeaders: Headers = new Headers();

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
    public inventoryUnitTypesByIdDelete(params: inventoryUnitTypesByIdDelete.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryUnitTypesByIdDeleteWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a unit type
     * Get a unit type by id.
     * @param id The id of the unit type.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
     */
    public inventoryUnitTypesByIdGet(params: inventoryUnitTypesByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.UnitTypeModel | undefined> {
        return this.inventoryUnitTypesByIdGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a unit type exists
     * Check if a unit type exists by id.
     * @param id The id of the unit type.
     */
    public inventoryUnitTypesByIdHead(params: inventoryUnitTypesByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryUnitTypesByIdHeadWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replace a unit type
     * Use this call to modify a unit type.
     * @param id The id of the unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryUnitTypesByIdPut(params: inventoryUnitTypesByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryUnitTypesByIdPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get all unit types, or all unit types for a property
     * Get the list of unit types.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return unit types for specific property
     */
    public inventoryUnitTypesGet(params: inventoryUnitTypesGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.UnitTypeListModel | undefined> {
        return this.inventoryUnitTypesGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Create a unit type
     * Use this call to create a new unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryUnitTypesPost(params: inventoryUnitTypesPost.Params, $options?: ApaleoRequestOptions)
        : Observable<models.UnitTypeCreatedModel | undefined> {
        return this.inventoryUnitTypesPostWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns number of unit types
     * Returns number of unit types matching the filter criteria
     * @param propertyId Return unit types for specific property
     */
    public inventoryUnitTypescountGet(params: inventoryUnitTypescountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.CountModel | undefined> {
        return this.inventoryUnitTypescountGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Delete a unit type
     * Use this call to delete a unit type.
     * @param id The id of the unit type.
     */
    public inventoryUnitTypesByIdDeleteWithRawHttp(params: inventoryUnitTypesByIdDelete.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryUnitTypesByIdDeleteWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a unit type
     * Get a unit type by id.
     * @param id The id of the unit type.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
     */
    public inventoryUnitTypesByIdGetWithRawHttp(params: inventoryUnitTypesByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.UnitTypeModel>> {
        return this.inventoryUnitTypesByIdGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a unit type exists
     * Check if a unit type exists by id.
     * @param id The id of the unit type.
     */
    public inventoryUnitTypesByIdHeadWithRawHttp(params: inventoryUnitTypesByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryUnitTypesByIdHeadWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replace a unit type
     * Use this call to modify a unit type.
     * @param id The id of the unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryUnitTypesByIdPutWithRawHttp(params: inventoryUnitTypesByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryUnitTypesByIdPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get all unit types, or all unit types for a property
     * Get the list of unit types.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return unit types for specific property
     */
    public inventoryUnitTypesGetWithRawHttp(params: inventoryUnitTypesGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.UnitTypeListModel>> {
        return this.inventoryUnitTypesGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Create a unit type
     * Use this call to create a new unit type.
     * @param requestBody The definition of the unit type.
     */
    public inventoryUnitTypesPostWithRawHttp(params: inventoryUnitTypesPost.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.UnitTypeCreatedModel>> {
        return this.inventoryUnitTypesPostWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns number of unit types
     * Returns number of unit types matching the filter criteria
     * @param propertyId Return unit types for specific property
     */
    public inventoryUnitTypescountGetWithRawHttp(params: inventoryUnitTypescountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.CountModel>> {
        return this.inventoryUnitTypescountGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Delete a unit type
     * Use this call to delete a unit type.
     * @param id The id of the unit type.
     */
    private inventoryUnitTypesByIdDeleteWithHttpInfo(params: inventoryUnitTypesByIdDelete.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitTypesByIdDelete.');
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
                method: RequestMethod.Delete,
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryUnitTypesByIdDeleteWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get a unit type
     * Get a unit type by id.
     * @param id The id of the unit type.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
     */
    private inventoryUnitTypesByIdGetWithHttpInfo(params: inventoryUnitTypesByIdGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitTypesByIdGet.');
        }
        if (params.languages) {
            queryParameters.set('languages', params.languages.join(COLLECTION_FORMATS['csv']));
        }

        if (params.expand !== undefined) {
            queryParameters.set('expand', <any>params.expand);
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

                return this.inventoryUnitTypesByIdGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Check if a unit type exists
     * Check if a unit type exists by id.
     * @param id The id of the unit type.
     */
    private inventoryUnitTypesByIdHeadWithHttpInfo(params: inventoryUnitTypesByIdHead.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitTypesByIdHead.');
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

                return this.inventoryUnitTypesByIdHeadWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Replace a unit type
     * Use this call to modify a unit type.
     * @param id The id of the unit type.
     * @param requestBody The definition of the unit type.
     */
    private inventoryUnitTypesByIdPutWithHttpInfo(params: inventoryUnitTypesByIdPut.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitTypesByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryUnitTypesByIdPut.');
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

                return this.inventoryUnitTypesByIdPutWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get all unit types, or all unit types for a property
     * Get the list of unit types.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return unit types for specific property
     */
    private inventoryUnitTypesGetWithHttpInfo(params: inventoryUnitTypesGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling inventoryUnitTypesGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling inventoryUnitTypesGet.');
        }
        if (params.propertyId !== undefined) {
            queryParameters.set('propertyId', <any>params.propertyId);
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

                return this.inventoryUnitTypesGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Create a unit type
     * Use this call to create a new unit type.
     * @param requestBody The definition of the unit type.
     */
    private inventoryUnitTypesPostWithHttpInfo(params: inventoryUnitTypesPost.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryUnitTypesPost.');
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

                return this.inventoryUnitTypesPostWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns number of unit types
     * Returns number of unit types matching the filter criteria
     * @param propertyId Return unit types for specific property
     */
    private inventoryUnitTypescountGetWithHttpInfo(params: inventoryUnitTypescountGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/unit-types/$count';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (params.propertyId !== undefined) {
            queryParameters.set('propertyId', <any>params.propertyId);
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

                return this.inventoryUnitTypescountGetWithHttpInfo(params, $options);
            }
        )
    }

}
