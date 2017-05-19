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


export interface ratesV1OffersStayGetParams {
    /**
     * The property id
     */
    propertyId: string;
    /**
     * The arrival date and the optional time
     */
    arrival: string;
    /**
     * The departure date and the optional time
     */
    departure: string;
    /**
     * List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    expand?: string;
}

@Injectable()
export class OfferApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get offers for one specifc stay
     * Get offers for a specific property, arrival and departure date.
     * @param propertyId The property id
     * @param arrival The arrival date and the optional time
     * @param departure The departure date and the optional time
     * @param expand List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    public ratesV1OffersStayGet(params: ratesV1OffersStayGetParams, $options?: IRequestOptions)
        : Observable<models.StayOffersModel | undefined> {
        return this.ratesV1OffersStayGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get offers for one specifc stay
     * Get offers for a specific property, arrival and departure date.
     * @param propertyId The property id
     * @param arrival The arrival date and the optional time
     * @param departure The departure date and the optional time
     * @param expand List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    public ratesV1OffersStayGetWithRawHttp(params: ratesV1OffersStayGetParams, $options?: IRequestOptions)
        : Observable<ResponseModel<models.StayOffersModel>> {
        return this.ratesV1OffersStayGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get offers for one specifc stay
     * Get offers for a specific property, arrival and departure date.
     * @param propertyId The property id
     * @param arrival The arrival date and the optional time
     * @param departure The departure date and the optional time
     * @param expand List of all embedded resources that should be expanded in the response - otherwise you will just get id and _link. Possible values are: property. All other values will be silently ignored.
     */
    private ratesV1OffersStayGetWithHttpInfo(params: ratesV1OffersStayGetParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/rates/v1/offers/stay';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'propertyId' is not null or undefined
        if (params.propertyId === null || params.propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling ratesV1OffersStayGet.');
        }
        // verify required parameter 'arrival' is not null or undefined
        if (params.arrival === null || params.arrival === undefined) {
            throw new Error('Required parameter arrival was null or undefined when calling ratesV1OffersStayGet.');
        }
        // verify required parameter 'departure' is not null or undefined
        if (params.departure === null || params.departure === undefined) {
            throw new Error('Required parameter departure was null or undefined when calling ratesV1OffersStayGet.');
        }
        if (params.propertyId !== undefined) {
            queryParameters.set('propertyId', <any>params.propertyId);
        }

        if (params.arrival !== undefined) {
            queryParameters.set('arrival', <any>params.arrival);
        }

        if (params.departure !== undefined) {
            queryParameters.set('departure', <any>params.departure);
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

                return this.ratesV1OffersStayGetWithHttpInfo(params, $options);
            }
        )
    }

}
