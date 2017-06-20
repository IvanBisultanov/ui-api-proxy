/**
 * Rates Management
 * Manage the rate plans and rates to rent out your inventory at the best price.
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



export namespace ratesRatePlansByIdDelete {
    export interface Params {
        /**
        * The id of the rateplan.
        */
        id: string;
    }
    
}
export namespace ratesRatePlansByIdGet {
    export interface Params {
        /**
        * The id of the rateplan.
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
export namespace ratesRatePlansByIdHead {
    export interface Params {
        /**
        * The id of the rateplan.
        */
        id: string;
    }
    
}
export namespace ratesRatePlansByIdPut {
    export interface Params {
        /**
        * The id of the rateplan.
        */
        id: string;
        /**
        * The definition of the rateplan.
        */
        requestBody: models.ReplaceRatePlanModel;
    }
    
}
export namespace ratesRatePlansGet {
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
        * Return rate plans for specific property
        */
        propertyId?: string;
    }
    
}
export namespace ratesRatePlansPost {
    export interface Params {
        /**
        * The definition of the rateplan.
        */
        requestBody: models.CreateRatePlanModel;
    }
    
}
export namespace ratesRatePlanscountGet {
    export interface Params {
        /**
        * Return rate plans for specific property
        */
        propertyId?: string;
    }
    
}

@Injectable()
export class RatePlanApi {
    public readonly defaultHeaders: Headers = new Headers();

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
    public ratesRatePlansByIdDelete(params: ratesRatePlansByIdDelete.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.ratesRatePlansByIdDeleteWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a rateplan
     * Get a rateplan by id.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
     */
    public ratesRatePlansByIdGet(params: ratesRatePlansByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.RatePlanModel | undefined> {
        return this.ratesRatePlansByIdGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    public ratesRatePlansByIdHead(params: ratesRatePlansByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.ratesRatePlansByIdHeadWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesRatePlansByIdPut(params: ratesRatePlansByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.ratesRatePlansByIdPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return rate plans for specific property
     */
    public ratesRatePlansGet(params: ratesRatePlansGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.RatePlanListModel | undefined> {
        return this.ratesRatePlansGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan. The rate plan will already contain empty rates, fill them later using PUT rates.
     * @param requestBody The definition of the rateplan.
     */
    public ratesRatePlansPost(params: ratesRatePlansPost.Params, $options?: ApaleoRequestOptions)
        : Observable<models.RatePlanCreatedModel | undefined> {
        return this.ratesRatePlansPostWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns number of rate plans
     * Returns number of rate plans matching the filter criteria
     * @param propertyId Return rate plans for specific property
     */
    public ratesRatePlanscountGet(params: ratesRatePlanscountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.CountModel | undefined> {
        return this.ratesRatePlanscountGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    public ratesRatePlansByIdDeleteWithRawHttp(params: ratesRatePlansByIdDelete.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesRatePlansByIdDeleteWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a rateplan
     * Get a rateplan by id.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
     */
    public ratesRatePlansByIdGetWithRawHttp(params: ratesRatePlansByIdGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.RatePlanModel>> {
        return this.ratesRatePlansByIdGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    public ratesRatePlansByIdHeadWithRawHttp(params: ratesRatePlansByIdHead.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesRatePlansByIdHeadWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    public ratesRatePlansByIdPutWithRawHttp(params: ratesRatePlansByIdPut.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesRatePlansByIdPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a rateplan list
     * Get the list of rateplans.
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     * @param propertyId Return rate plans for specific property
     */
    public ratesRatePlansGetWithRawHttp(params: ratesRatePlansGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.RatePlanListModel>> {
        return this.ratesRatePlansGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan. The rate plan will already contain empty rates, fill them later using PUT rates.
     * @param requestBody The definition of the rateplan.
     */
    public ratesRatePlansPostWithRawHttp(params: ratesRatePlansPost.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.RatePlanCreatedModel>> {
        return this.ratesRatePlansPostWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns number of rate plans
     * Returns number of rate plans matching the filter criteria
     * @param propertyId Return rate plans for specific property
     */
    public ratesRatePlanscountGetWithRawHttp(params: ratesRatePlanscountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.CountModel>> {
        return this.ratesRatePlanscountGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Delete a rateplan
     * Use this call to delete a rateplan.
     * @param id The id of the rateplan.
     */
    private ratesRatePlansByIdDeleteWithHttpInfo(params: ratesRatePlansByIdDelete.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdDelete.');
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

                return this.ratesRatePlansByIdDeleteWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Get a rateplan
     * Get a rateplan by id.
     * @param id The id of the rateplan.
     * @param languages &#39;all&#39; or comma separated list of language codes
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.
     */
    private ratesRatePlansByIdGetWithHttpInfo(params: ratesRatePlansByIdGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdGet.');
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

                return this.ratesRatePlansByIdGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Check if a rateplan exists
     * Check if a rateplan exists by id.
     * @param id The id of the rateplan.
     */
    private ratesRatePlansByIdHeadWithHttpInfo(params: ratesRatePlansByIdHead.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdHead.');
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

                return this.ratesRatePlansByIdHeadWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Replace a rateplan
     * Use this call to modify a rateplan.
     * @param id The id of the rateplan.
     * @param requestBody The definition of the rateplan.
     */
    private ratesRatePlansByIdPutWithHttpInfo(params: ratesRatePlansByIdPut.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesRatePlansByIdPut.');
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

                return this.ratesRatePlansByIdPutWithHttpInfo(params, $options);
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
    private ratesRatePlansGetWithHttpInfo(params: ratesRatePlansGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling ratesRatePlansGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling ratesRatePlansGet.');
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

                return this.ratesRatePlansGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Create a rateplan
     * Use this call to create a new rateplan. The rate plan will already contain empty rates, fill them later using PUT rates.
     * @param requestBody The definition of the rateplan.
     */
    private ratesRatePlansPostWithHttpInfo(params: ratesRatePlansPost.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesRatePlansPost.');
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

                return this.ratesRatePlansPostWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns number of rate plans
     * Returns number of rate plans matching the filter criteria
     * @param propertyId Return rate plans for specific property
     */
    private ratesRatePlanscountGetWithHttpInfo(params: ratesRatePlanscountGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/$count';

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

                return this.ratesRatePlanscountGetWithHttpInfo(params, $options);
            }
        )
    }

}
