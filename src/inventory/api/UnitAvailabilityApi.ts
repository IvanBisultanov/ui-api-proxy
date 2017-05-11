/**
 * Apaleo Inventory API
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


export interface inventoryV1UnitsAvailableGetParams {
    /**
     * The property id
     */
    propertyId: string;
    /**
     * The from date and the optional time
     */
    from: string;
    /**
     * The to date and the optional time
     */
    to: string;
    /**
     * The unit type id
     */
    unitTypeId?: string;
}

@Injectable()
export class UnitAvailabilityApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get a list of all available units in a property
     * Get the list of available units for a property, and a specifed time period in the future.&lt;br /&gt;  The time for the from and to filters are optional. If no time for &#39;from&#39; is specified, it will be set to  the default check-in time of the property, or the current time (whichever is later).&lt;br /&gt;  If no time for &#39;to&#39; is specified, the default check-out time of the property will be used.
     * @param propertyId The property id
     * @param from The from date and the optional time
     * @param to The to date and the optional time
     * @param unitTypeId The unit type id
     */
    public inventoryV1UnitsAvailableGet(params: inventoryV1UnitsAvailableGetParams, $options?: IRequestOptions)
        : Observable<models.UnitListModel | undefined> {
        return this.inventoryV1UnitsAvailableGetWithRawHttp(params, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get a list of all available units in a property
     * Get the list of available units for a property, and a specifed time period in the future.&lt;br /&gt;  The time for the from and to filters are optional. If no time for &#39;from&#39; is specified, it will be set to  the default check-in time of the property, or the current time (whichever is later).&lt;br /&gt;  If no time for &#39;to&#39; is specified, the default check-out time of the property will be used.
     * @param propertyId The property id
     * @param from The from date and the optional time
     * @param to The to date and the optional time
     * @param unitTypeId The unit type id
     */
    public inventoryV1UnitsAvailableGetWithRawHttp(params: inventoryV1UnitsAvailableGetParams, $options?: IRequestOptions)
        : Observable<ResponseModel<models.UnitListModel>> {
        return this.inventoryV1UnitsAvailableGetWithHttpInfo(params, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get a list of all available units in a property
     * Get the list of available units for a property, and a specifed time period in the future.&lt;br /&gt;  The time for the from and to filters are optional. If no time for &#39;from&#39; is specified, it will be set to  the default check-in time of the property, or the current time (whichever is later).&lt;br /&gt;  If no time for &#39;to&#39; is specified, the default check-out time of the property will be used.
     * @param propertyId The property id
     * @param from The from date and the optional time
     * @param to The to date and the optional time
     * @param unitTypeId The unit type id
     */
    private inventoryV1UnitsAvailableGetWithHttpInfo(params: inventoryV1UnitsAvailableGetParams, $options?: IRequestOptions): Observable<Response> {
        params = params || {};
        const path = this.basePath + '/inventory/v1/units/available';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'propertyId' is not null or undefined
        if (params.propertyId === null || params.propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling inventoryV1UnitsAvailableGet.');
        }
        // verify required parameter 'from' is not null or undefined
        if (params.from === null || params.from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling inventoryV1UnitsAvailableGet.');
        }
        // verify required parameter 'to' is not null or undefined
        if (params.to === null || params.to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling inventoryV1UnitsAvailableGet.');
        }
        if (params.propertyId !== undefined) {
            queryParameters.set('propertyId', <any>params.propertyId);
        }

        if (params.unitTypeId !== undefined) {
            queryParameters.set('unitTypeId', <any>params.unitTypeId);
        }

        if (params.from !== undefined) {
            queryParameters.set('from', <any>params.from);
        }

        if (params.to !== undefined) {
            queryParameters.set('to', <any>params.to);
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

                return this.inventoryV1UnitsAvailableGetWithHttpInfo(params, $options);
            }
        )
    }

}
