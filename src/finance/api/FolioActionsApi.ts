/**
 * Apaleo Finance API
 * Everything around the Folio, Invioces and Accounting.
 *
 * OpenAPI spec version: 1.0.0
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


export interface financeFolioActionsNightAuditPutParams {
    /**
     * Filter folio list by property id
     */
    propertyId?: string;
}

@Injectable()
export class FolioActionsApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Performs the night audit for one property.
     * The night audit will post all outstanding items in the folio.
     * @param propertyId Filter folio list by property id
     */
    public financeFolioActionsNightAuditPut(params: financeFolioActionsNightAuditPutParams, $options?: IRequestOptions)
        : Observable<void> {
        return this.financeFolioActionsNightAuditPutWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Performs the night audit for one property.
     * The night audit will post all outstanding items in the folio.
     * @param propertyId Filter folio list by property id
     */
    public financeFolioActionsNightAuditPutWithRawHttp(params: financeFolioActionsNightAuditPutParams, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.financeFolioActionsNightAuditPutWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Performs the night audit for one property.
     * The night audit will post all outstanding items in the folio.
     * @param propertyId Filter folio list by property id
     */
    private financeFolioActionsNightAuditPutWithHttpInfo(params: financeFolioActionsNightAuditPutParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/finance/folio-actions/night-audit';

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
                method: RequestMethod.Put,
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.financeFolioActionsNightAuditPutWithHttpInfo(params, $options);
            }
        )
    }

}
