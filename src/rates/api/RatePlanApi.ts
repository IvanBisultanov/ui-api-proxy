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

import { Inject, Injectable, LOCALE_ID }                           from '@angular/core';
import { Http, Headers, URLSearchParams, Response, RequestMethod } from '@angular/http';

import { Observable }                                              from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as models                                                 from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                           from '../../variables';
import { IRequestOptions, ResponseModel }                          from '../../models';
import { Configuration }                                           from '../../configuration';
import { callApiEndpoint }                                         from '../../functions.api';

/* tslint:disable:no-unused-variable member-ordering */


export interface ratesV1RatePlansByIdDeleteParams {
    /**
     * The id of the rateplan.
     */
    id: string;
}
export interface ratesV1RatePlansByIdGetParams {
    /**
     * The id of the rateplan.
     */
    id: string;
    /**
     * 'all' or comma separated list of language codes
     */
    languages?: Array<string>;
    /**
     * List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    expand?: string;
}
export interface ratesV1RatePlansByIdHeadParams {
    /**
     * The id of the rateplan.
     */
    id: string;
}
export interface ratesV1RatePlansByIdPutParams {
    /**
     * The id of the rateplan.
     */
    id: string;
    /**
     * The definition of the rateplan.
     */
    requestBody: models.ReplaceRatePlanModel;
}
export interface ratesV1RatePlansGetParams {
    /**
     * Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     */
    pageNumber: number;
    /**
     * Page size
     */
    pageSize: number;
    /**
     * Return rate plans for specific property
     */
    propertyId?: string;
}
export interface ratesV1RatePlansPostParams {
    /**
     * The definition of the rateplan.
     */
    requestBody: models.CreateRatePlanModel;
}

@Injectable()
export class RatePlanApi {
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
    public ratesV1RatePlansByIdDelete(params: ratesV1RatePlansByIdDeleteParams, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RatePlansByIdDeleteWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a rateplan
     * Get a rateplan by id.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    public ratesV1RatePlansByIdGet(params: ratesV1RatePlansByIdGetParams, $options?: IRequestOptions)
        : Observable<models.RatePlanModel | undefined> {
        return this.ratesV1RatePlansByIdGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    public ratesV1RatePlansByIdHead(params: ratesV1RatePlansByIdHeadParams, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RatePlansByIdHeadWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RatePlansByIdPut(params: ratesV1RatePlansByIdPutParams, $options?: IRequestOptions)
        : Observable<void> {
        return this.ratesV1RatePlansByIdPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return rate plans for specific property
     */
    public ratesV1RatePlansGet(params: ratesV1RatePlansGetParams, $options?: IRequestOptions)
        : Observable<models.RatePlanListModel | undefined> {
        return this.ratesV1RatePlansGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RatePlansPost(params: ratesV1RatePlansPostParams, $options?: IRequestOptions)
        : Observable<models.RatePlanCreatedModel | undefined> {
        return this.ratesV1RatePlansPostWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Return total count of rateplans
     * Return total count of rateplans
     */
    public ratesV1RatePlanscountGet($options?: IRequestOptions)
        : Observable<number | undefined> {
        return this.ratesV1RatePlanscountGetWithRawHttp($options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    public ratesV1RatePlansByIdDeleteWithRawHttp(params: ratesV1RatePlansByIdDeleteParams, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RatePlansByIdDeleteWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a rateplan
     * Get a rateplan by id.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    public ratesV1RatePlansByIdGetWithRawHttp(params: ratesV1RatePlansByIdGetParams, $options?: IRequestOptions)
        : Observable<ResponseModel<models.RatePlanModel>> {
        return this.ratesV1RatePlansByIdGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    public ratesV1RatePlansByIdHeadWithRawHttp(params: ratesV1RatePlansByIdHeadParams, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RatePlansByIdHeadWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RatePlansByIdPutWithRawHttp(params: ratesV1RatePlansByIdPutParams, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesV1RatePlansByIdPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return rate plans for specific property
     */
    public ratesV1RatePlansGetWithRawHttp(params: ratesV1RatePlansGetParams, $options?: IRequestOptions)
        : Observable<ResponseModel<models.RatePlanListModel>> {
        return this.ratesV1RatePlansGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesV1RatePlansPostWithRawHttp(params: ratesV1RatePlansPostParams, $options?: IRequestOptions)
        : Observable<ResponseModel<models.RatePlanCreatedModel>> {
        return this.ratesV1RatePlansPostWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Return total count of rateplans
     * Return total count of rateplans
     */
    public ratesV1RatePlanscountGetWithRawHttp($options?: IRequestOptions)
        : Observable<ResponseModel<number>> {
        return this.ratesV1RatePlanscountGetWithHttpInfo($options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    private ratesV1RatePlansByIdDeleteWithHttpInfo(params: ratesV1RatePlansByIdDeleteParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RatePlansByIdDelete.');
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

                return this.ratesV1RatePlansByIdDeleteWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get a rateplan
     * Get a rateplan by id.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    private ratesV1RatePlansByIdGetWithHttpInfo(params: ratesV1RatePlansByIdGetParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RatePlansByIdGet.');
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

                return this.ratesV1RatePlansByIdGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    private ratesV1RatePlansByIdHeadWithHttpInfo(params: ratesV1RatePlansByIdHeadParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RatePlansByIdHead.');
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

                return this.ratesV1RatePlansByIdHeadWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    private ratesV1RatePlansByIdPutWithHttpInfo(params: ratesV1RatePlansByIdPutParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesV1RatePlansByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesV1RatePlansByIdPut.');
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

                return this.ratesV1RatePlansByIdPutWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return rate plans for specific property
     */
    private ratesV1RatePlansGetWithHttpInfo(params: ratesV1RatePlansGetParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/rate-plans';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling ratesV1RatePlansGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling ratesV1RatePlansGet.');
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

                return this.ratesV1RatePlansGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan.
     * @param requestBody The definition of the rateplan.
     */
    private ratesV1RatePlansPostWithHttpInfo(params: ratesV1RatePlansPostParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/rate-plans';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesV1RatePlansPost.');
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

                return this.ratesV1RatePlansPostWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Return total count of rateplans
     * Return total count of rateplans
     */
    private ratesV1RatePlanscountGetWithHttpInfo($options?: IRequestOptions): Observable<Response> {

        const path = this.basePath + '/rates/v1/rate-plans/$count';

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

                return this.ratesV1RatePlanscountGetWithHttpInfo($options);
            }
        )
    }

}
