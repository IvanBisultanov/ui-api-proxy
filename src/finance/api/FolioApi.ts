/**
 * Apaleo Finance API
 * Everything around the Folio, Invoices and Accounting.
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



export namespace financeFoliosByIdGet {
    export interface Params {
        /**
        * The id of the folio.
        */
        id: string;
    }
    
}
export namespace financeFoliosGet {
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
        * Filter folio list by property id
        */
        propertyId?: string;
    }
    
}
export namespace financeFolioscountGet {
    export interface Params {
        /**
        * Filter folio list by property id
        */
        propertyId?: string;
    }
    
}

@Injectable()
export class FolioApi {
    public readonly defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Returns one folio.
     * Get a folio by id.
     * @param id The id of the folio.
     */
    public financeFoliosByIdGet(params: financeFoliosByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.FolioModel | undefined> {
        return this.financeFoliosByIdGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns a list of all folios.
     * Returns a list of all folios.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Filter folio list by property id
     */
    public financeFoliosGet(params: financeFoliosGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.FolioListModel | undefined> {
        return this.financeFoliosGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns number of folios.
     * Returns number of folios matching the filter criteria
     * @param propertyId Filter folio list by property id
     */
    public financeFolioscountGet(params: financeFolioscountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.CountModel | undefined> {
        return this.financeFolioscountGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Returns one folio.
     * Get a folio by id.
     * @param id The id of the folio.
     */
    public financeFoliosByIdGetWithRawHttp(params: financeFoliosByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.FolioModel>> {
        return this.financeFoliosByIdGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns a list of all folios.
     * Returns a list of all folios.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Filter folio list by property id
     */
    public financeFoliosGetWithRawHttp(params: financeFoliosGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.FolioListModel>> {
        return this.financeFoliosGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns number of folios.
     * Returns number of folios matching the filter criteria
     * @param propertyId Filter folio list by property id
     */
    public financeFolioscountGetWithRawHttp(params: financeFolioscountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.CountModel>> {
        return this.financeFolioscountGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Returns one folio.
     * Get a folio by id.
     * @param id The id of the folio.
     */
    private financeFoliosByIdGetWithHttpInfo(params: financeFoliosByIdGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/finance/folios/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling financeFoliosByIdGet.');
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

                return this.financeFoliosByIdGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns a list of all folios.
     * Returns a list of all folios.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Filter folio list by property id
     */
    private financeFoliosGetWithHttpInfo(params: financeFoliosGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/finance/folios';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling financeFoliosGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling financeFoliosGet.');
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

                return this.financeFoliosGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns number of folios.
     * Returns number of folios matching the filter criteria
     * @param propertyId Filter folio list by property id
     */
    private financeFolioscountGetWithHttpInfo(params: financeFolioscountGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/finance/folios/$count';

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

                return this.financeFolioscountGetWithHttpInfo(params, $options);
            }
        )
    }

}
