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



export namespace ratesRatePlansByIdRatesDelete {
    export interface Params {
        /**
        * The id of the rate plan.
        */
        id: string;
        /**
        * The criteria used to delete the rates.
        */
        requestBody: models.DeleteRateListModel;
    }
    
}
export namespace ratesRatePlansByIdRatesGet {
    export interface Params {
        /**
        * The id of the rate plan
        */
        id: string;
        /**
        * The start of the date time interval
        */
        from: Date;
        /**
        * The end of the date time interval
        */
        to: Date;
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
export namespace ratesRatePlansByIdRatesPut {
    export interface Params {
        /**
        * The id of the rate plan.
        */
        id: string;
        /**
        * The definition of the rates.
        */
        requestBody: models.ReplaceRateListModel;
    }
    
}
export namespace ratesRatePlansByIdRatescountGet {
    export interface Params {
        /**
        * The rate plan id
        */
        id: string;
        /**
        * The start of the date time interval
        */
        from: Date;
        /**
        * The end of the date time interval
        */
        to: Date;
    }
    
}

@Injectable()
export class RateApi {
    public readonly defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Deletes the rates for the rate plan
     * Returns all rates starting or ending in the specified time range.
     * @param id The id of the rate plan.
     * @param requestBody The criteria used to delete the rates.
     */
    public ratesRatePlansByIdRatesDelete(params: ratesRatePlansByIdRatesDelete.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.ratesRatePlansByIdRatesDeleteWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns a list of rates.
     * Returns all rates for a specific rate plan. If a rate has not been loaded, it will still  be returned, but only the from and to values will be filled.  The time range per rate is defined by the time slice template used for the rate plan.&lt;br /&gt;  Time ranges with unloaded rates will not be available for sell.
     * @param id The id of the rate plan
     * @param from The start of the date time interval
     * @param to The end of the date time interval
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     */
    public ratesRatePlansByIdRatesGet(params: ratesRatePlansByIdRatesGet.Params, $options?: ApaleoRequestOptions)
        : Observable<models.RateListModel | undefined> {
        return this.ratesRatePlansByIdRatesGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replaces the rates for the rate plan
     * Use this call to replace certain rates of the rate plan. All the rates from your request  matching the time range of a time slice will be replaced or initially loaded.
     * @param id The id of the rate plan.
     * @param requestBody The definition of the rates.
     */
    public ratesRatePlansByIdRatesPut(params: ratesRatePlansByIdRatesPut.Params, $options?: ApaleoRequestOptions)
        : Observable<void> {
        return this.ratesRatePlansByIdRatesPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Returns the number of rates for a specified rate plan.
     * 
     * @param id The rate plan id
     * @param from The start of the date time interval
     * @param to The end of the date time interval
     */
    public ratesRatePlansByIdRatescountGet(params: ratesRatePlansByIdRatescountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<number | undefined> {
        return this.ratesRatePlansByIdRatescountGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Deletes the rates for the rate plan
     * Returns all rates starting or ending in the specified time range.
     * @param id The id of the rate plan.
     * @param requestBody The criteria used to delete the rates.
     */
    public ratesRatePlansByIdRatesDeleteWithRawHttp(params: ratesRatePlansByIdRatesDelete.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesRatePlansByIdRatesDeleteWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns a list of rates.
     * Returns all rates for a specific rate plan. If a rate has not been loaded, it will still  be returned, but only the from and to values will be filled.  The time range per rate is defined by the time slice template used for the rate plan.&lt;br /&gt;  Time ranges with unloaded rates will not be available for sell.
     * @param id The id of the rate plan
     * @param from The start of the date time interval
     * @param to The end of the date time interval
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     */
    public ratesRatePlansByIdRatesGetWithRawHttp(params: ratesRatePlansByIdRatesGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<models.RateListModel>> {
        return this.ratesRatePlansByIdRatesGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replaces the rates for the rate plan
     * Use this call to replace certain rates of the rate plan. All the rates from your request  matching the time range of a time slice will be replaced or initially loaded.
     * @param id The id of the rate plan.
     * @param requestBody The definition of the rates.
     */
    public ratesRatePlansByIdRatesPutWithRawHttp(params: ratesRatePlansByIdRatesPut.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.ratesRatePlansByIdRatesPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Returns the number of rates for a specified rate plan.
     * 
     * @param id The rate plan id
     * @param from The start of the date time interval
     * @param to The end of the date time interval
     */
    public ratesRatePlansByIdRatescountGetWithRawHttp(params: ratesRatePlansByIdRatescountGet.Params, $options?: ApaleoRequestOptions)
        : Observable<ResponseModel<number>> {
        return this.ratesRatePlansByIdRatescountGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Deletes the rates for the rate plan
     * Returns all rates starting or ending in the specified time range.
     * @param id The id of the rate plan.
     * @param requestBody The criteria used to delete the rates.
     */
    private ratesRatePlansByIdRatesDeleteWithHttpInfo(params: ratesRatePlansByIdRatesDelete.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}/rates'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdRatesDelete.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesRatePlansByIdRatesDelete.');
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
                method: RequestMethod.Delete,
                headers: headers,
                body: params.requestBody == null ? '' : params.requestBody, // https://github.com/angular/angular/issues/10612
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.ratesRatePlansByIdRatesDeleteWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns a list of rates.
     * Returns all rates for a specific rate plan. If a rate has not been loaded, it will still  be returned, but only the from and to values will be filled.  The time range per rate is defined by the time slice template used for the rate plan.&lt;br /&gt;  Time ranges with unloaded rates will not be available for sell.
     * @param id The id of the rate plan
     * @param from The start of the date time interval
     * @param to The end of the date time interval
     * @param pageNumber Page number, starting from 1. Results in 204 if there are no items on that page. If the value is lower than 1, will be set to 1
     * @param pageSize Page size
     */
    private ratesRatePlansByIdRatesGetWithHttpInfo(params: ratesRatePlansByIdRatesGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}/rates'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdRatesGet.');
        }
        // verify required parameter 'from' is not null or undefined
        if (params.from === null || params.from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling ratesRatePlansByIdRatesGet.');
        }
        // verify required parameter 'to' is not null or undefined
        if (params.to === null || params.to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling ratesRatePlansByIdRatesGet.');
        }
        // verify required parameter 'pageNumber' is not null or undefined
        if (params.pageNumber === null || params.pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling ratesRatePlansByIdRatesGet.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (params.pageSize === null || params.pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling ratesRatePlansByIdRatesGet.');
        }
        if (params.from !== undefined) {
            queryParameters.set('from', <any>params.from.toApaleoIso());
        }

        if (params.to !== undefined) {
            queryParameters.set('to', <any>params.to.toApaleoIso());
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

                return this.ratesRatePlansByIdRatesGetWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Replaces the rates for the rate plan
     * Use this call to replace certain rates of the rate plan. All the rates from your request  matching the time range of a time slice will be replaced or initially loaded.
     * @param id The id of the rate plan.
     * @param requestBody The definition of the rates.
     */
    private ratesRatePlansByIdRatesPutWithHttpInfo(params: ratesRatePlansByIdRatesPut.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}/rates'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdRatesPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (params.requestBody === null || params.requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling ratesRatePlansByIdRatesPut.');
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

                return this.ratesRatePlansByIdRatesPutWithHttpInfo(params, $options);
            }
        )
    }

    /**
     * Returns the number of rates for a specified rate plan.
     * 
     * @param id The rate plan id
     * @param from The start of the date time interval
     * @param to The end of the date time interval
     */
    private ratesRatePlansByIdRatescountGetWithHttpInfo(params: ratesRatePlansByIdRatescountGet.Params, $options?: ApaleoRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/rate-plans/${id}/rates/$count'
                    .replace('${' + 'id' + '}', String(params.id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (params.id === null || params.id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ratesRatePlansByIdRatescountGet.');
        }
        // verify required parameter 'from' is not null or undefined
        if (params.from === null || params.from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling ratesRatePlansByIdRatescountGet.');
        }
        // verify required parameter 'to' is not null or undefined
        if (params.to === null || params.to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling ratesRatePlansByIdRatescountGet.');
        }
        if (params.from !== undefined) {
            queryParameters.set('from', <any>params.from.toApaleoIso());
        }

        if (params.to !== undefined) {
            queryParameters.set('to', <any>params.to.toApaleoIso());
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

                return this.ratesRatePlansByIdRatescountGetWithHttpInfo(params, $options);
            }
        )
    }

}
