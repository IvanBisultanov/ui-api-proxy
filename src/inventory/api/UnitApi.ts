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



export namespace inventoryUnitsByIdGet {
    export interface Params {
        /**
        * The id of the unit.
        */
        id: string;
        /**
        * 'all' or comma separated list of language codes
        */
        languages?: Array<string>;
        /**
        * List of all embedded resources that should be expanded in the response. Possible values are: property, unitType. All other values will be silently ignored.
        */
        expand?: string;
    }
    
}
export namespace inventoryUnitsByIdHead {
    export interface Params {
        /**
        * The id of the unit.
        */
        id: string;
    }
    
}
export namespace inventoryUnitsByIdPut {
    export interface Params {
        /**
        * The id of the unit.
        */
        id: string;
        /**
        * The definition of the unit.
        */
        requestBody: models.ReplaceUnitModel;
    }
    
}
export namespace inventoryUnitsGet {
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
        * Return units for specific property
        */
        propertyId?: string;
        /**
        * Return units for the specific unit type
        */
        unitTypeId?: string;
    }
    
}
export namespace inventoryUnitsPost {
    export interface Params {
        /**
        * The definition of the unit.
        */
        requestBody: models.CreateUnitModel;
    }
    
}
export namespace inventoryUnitscountGet {
    export interface Params {
        /**
        * Return units for specific property
        */
        propertyId?: string;
        /**
        * Return units for the specific unit type
        */
        unitTypeId?: string;
    }
    
}

@Injectable()
export class UnitApi {
    public readonly defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get a unit
     * Get a unit by id.
     * @param id The id of the unit.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property, unitType. All other values will be silently ignored.
     */
    public inventoryUnitsByIdGet(params: inventoryUnitsByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.UnitModel | undefined> {
        return this.inventoryUnitsByIdGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a unit exists
     * Check if a unit exists by id.
     * @param id The id of the unit.
     */
    public inventoryUnitsByIdHead(params: inventoryUnitsByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryUnitsByIdHeadWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replace a unit
     * Use this call to modify a unit.
     * @param id The id of the unit.
     * @param requestBody The definition of the unit.
     */
    public inventoryUnitsByIdPut(params: inventoryUnitsByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.inventoryUnitsByIdPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a units list
     * Get the list of units.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return units for specific property
     * @param unitTypeId Return units for the specific unit type
     */
    public inventoryUnitsGet(params: inventoryUnitsGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.UnitListModel | undefined> {
        return this.inventoryUnitsGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Create a unit
     * Use this call to create a new unit.
     * @param requestBody The definition of the unit.
     */
    public inventoryUnitsPost(params: inventoryUnitsPost.Params, $options?: ApaleoRequestOptions)
        : Observable<models.UnitCreatedModel | undefined> {
        return this.inventoryUnitsPostWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns number of units
     * Returns number of units matching the filter criteria
     * @param propertyId Return units for specific property
     * @param unitTypeId Return units for the specific unit type
     */
    public inventoryUnitscountGet(params: inventoryUnitscountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.CountModel | undefined> {
        return this.inventoryUnitscountGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get a unit
     * Get a unit by id.
     * @param id The id of the unit.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property, unitType. All other values will be silently ignored.
     */
    public inventoryUnitsByIdGetWithRawHttp(params: inventoryUnitsByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.UnitModel>> {
        return this.inventoryUnitsByIdGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a unit exists
     * Check if a unit exists by id.
     * @param id The id of the unit.
     */
    public inventoryUnitsByIdHeadWithRawHttp(params: inventoryUnitsByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryUnitsByIdHeadWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replace a unit
     * Use this call to modify a unit.
     * @param id The id of the unit.
     * @param requestBody The definition of the unit.
     */
    public inventoryUnitsByIdPutWithRawHttp(params: inventoryUnitsByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryUnitsByIdPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a units list
     * Get the list of units.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return units for specific property
     * @param unitTypeId Return units for the specific unit type
     */
    public inventoryUnitsGetWithRawHttp(params: inventoryUnitsGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.UnitListModel>> {
        return this.inventoryUnitsGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Create a unit
     * Use this call to create a new unit.
     * @param requestBody The definition of the unit.
     */
    public inventoryUnitsPostWithRawHttp(params: inventoryUnitsPost.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.UnitCreatedModel>> {
        return this.inventoryUnitsPostWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns number of units
     * Returns number of units matching the filter criteria
     * @param propertyId Return units for specific property
     * @param unitTypeId Return units for the specific unit type
     */
    public inventoryUnitscountGetWithRawHttp(params: inventoryUnitscountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.CountModel>> {
        return this.inventoryUnitscountGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get a unit
     * Get a unit by id.
     * @param id The id of the unit.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property, unitType. All other values will be silently ignored.
     */
    private inventoryUnitsByIdGetWithHttpInfo(params: inventoryUnitsByIdGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/units/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitsByIdGet.');
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

                return this.inventoryUnitsByIdGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Check if a unit exists
     * Check if a unit exists by id.
     * @param id The id of the unit.
     */
    private inventoryUnitsByIdHeadWithHttpInfo(params: inventoryUnitsByIdHead.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/units/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitsByIdHead.');
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

                return this.inventoryUnitsByIdHeadWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Replace a unit
     * Use this call to modify a unit.
     * @param id The id of the unit.
     * @param requestBody The definition of the unit.
     */
    private inventoryUnitsByIdPutWithHttpInfo(params: inventoryUnitsByIdPut.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/units/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryUnitsByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryUnitsByIdPut.');
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
                body: params.requestBody == null ? '' : JSON.stringify(params.requestBody), // https://github.com/angular/angular/issues/10612
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryUnitsByIdPutWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get a units list
     * Get the list of units.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return units for specific property
     * @param unitTypeId Return units for the specific unit type
     */
    private inventoryUnitsGetWithHttpInfo(params: inventoryUnitsGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/units';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling inventoryUnitsGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling inventoryUnitsGet.');
        }
        if (params.propertyId !== undefined) {
            queryParameters.set('propertyId', <any>params.propertyId);
        }

        if (params.unitTypeId !== undefined) {
            queryParameters.set('unitTypeId', <any>params.unitTypeId);
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

                return this.inventoryUnitsGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Create a unit
     * Use this call to create a new unit.
     * @param requestBody The definition of the unit.
     */
    private inventoryUnitsPostWithHttpInfo(params: inventoryUnitsPost.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/units';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryUnitsPost.');
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
                body: params.requestBody == null ? '' : JSON.stringify(params.requestBody), // https://github.com/angular/angular/issues/10612
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryUnitsPostWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns number of units
     * Returns number of units matching the filter criteria
     * @param propertyId Return units for specific property
     * @param unitTypeId Return units for the specific unit type
     */
    private inventoryUnitscountGetWithHttpInfo(params: inventoryUnitscountGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/units/$count';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (params.propertyId !== undefined) {
            queryParameters.set('propertyId', <any>params.propertyId);
        }

        if (params.unitTypeId !== undefined) {
            queryParameters.set('unitTypeId', <any>params.unitTypeId);
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

                return this.inventoryUnitscountGetWithHttpInfo(params, $options);
            }
        )
    }

}
