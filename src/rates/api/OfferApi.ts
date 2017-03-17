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
     * @param propertyCode The property code
     * @param arrival The arrival date
     * @param departure The departure date
     */
    public ratesV1OffersStayGet(propertyCode?: string, arrival?: Date, departure?: Date, $options?: IRequestOptions)
        : Observable<models.StayOffersModel | undefined> {
        return this.ratesV1OffersStayGetWithRawHttp(propertyCode, arrival, departure, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get offers for one specifc stay
     * Get offers for a specific property, arrival and departure date.
     * @param propertyCode The property code
     * @param arrival The arrival date
     * @param departure The departure date
     */
    public ratesV1OffersStayGetWithRawHttp(propertyCode?: string, arrival?: Date, departure?: Date, $options?: IRequestOptions)
        : Observable<ResponseModel<models.StayOffersModel>> {
        return this.ratesV1OffersStayGetWithHttpInfo(propertyCode, arrival, departure, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get offers for one specifc stay
     * Get offers for a specific property, arrival and departure date.
     * @param propertyCode The property code
     * @param arrival The arrival date
     * @param departure The departure date
     */
    private ratesV1OffersStayGetWithHttpInfo(propertyCode?: string, arrival?: Date, departure?: Date, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/rates/v1/offers/stay';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (propertyCode !== undefined) {
            queryParameters.set('propertyCode', <any>propertyCode);
        }

        if (arrival !== undefined) {
            queryParameters.set('arrival', <any>arrival.toISOString());
        }

        if (departure !== undefined) {
            queryParameters.set('departure', <any>departure.toISOString());
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
                        this.ratesV1OffersStayGetWithHttpInfo(propertyCode, arrival, departure, $options));
                }
            }
            throw err;
        });
    }

}
