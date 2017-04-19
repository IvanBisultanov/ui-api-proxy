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


@Injectable()
export class PropertyApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get a property
     * Get a property by id.
     * @param id The id of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesByIdGet(id: string, languages?: string, $options?: IRequestOptions)
        : Observable<models.PropertyModel | undefined> {
        return this.inventoryV1PropertiesByIdGetWithRawHttp(id, languages, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Check if a property exists
     * Check if a property exists by id.
     * @param id The id of the property.
     */
    public inventoryV1PropertiesByIdHead(id: string, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1PropertiesByIdHeadWithRawHttp(id, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param id The id of the property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesByIdPut(id: string, requestBody: models.ReplacePropertyModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.inventoryV1PropertiesByIdPutWithRawHttp(id, requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Get a properties list
     * Get the list of properties.
     */
    public inventoryV1PropertiesGet($options?: IRequestOptions)
        : Observable<models.PropertyListModel | undefined> {
        return this.inventoryV1PropertiesGetWithRawHttp($options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesPost(requestBody: models.CreatePropertyModel, $options?: IRequestOptions)
        : Observable<models.PropertyCreatedModel | undefined> {
        return this.inventoryV1PropertiesPostWithRawHttp(requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get a property
     * Get a property by id.
     * @param id The id of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    public inventoryV1PropertiesByIdGetWithRawHttp(id: string, languages?: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.PropertyModel>> {
        return this.inventoryV1PropertiesByIdGetWithHttpInfo(id, languages, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Check if a property exists
     * Check if a property exists by id.
     * @param id The id of the property.
     */
    public inventoryV1PropertiesByIdHeadWithRawHttp(id: string, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1PropertiesByIdHeadWithHttpInfo(id, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param id The id of the property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesByIdPutWithRawHttp(id: string, requestBody: models.ReplacePropertyModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.inventoryV1PropertiesByIdPutWithHttpInfo(id, requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Get a properties list
     * Get the list of properties.
     */
    public inventoryV1PropertiesGetWithRawHttp($options?: IRequestOptions)
        : Observable<ResponseModel<models.PropertyListModel>> {
        return this.inventoryV1PropertiesGetWithHttpInfo($options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    public inventoryV1PropertiesPostWithRawHttp(requestBody: models.CreatePropertyModel, $options?: IRequestOptions)
        : Observable<ResponseModel<models.PropertyCreatedModel>> {
        return this.inventoryV1PropertiesPostWithHttpInfo(requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get a property
     * Get a property by id.
     * @param id The id of the property.
     * @param languages &#39;all&#39; or comma separated list of language codes
     */
    private inventoryV1PropertiesByIdGetWithHttpInfo(id: string, languages?: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1PropertiesByIdGet.');
        }
        if (languages !== undefined) {
            queryParameters.set('languages', <any>languages);
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
                search: queryParameters
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryV1PropertiesByIdGetWithHttpInfo(id, languages, $options);
            }
        )
    }

    /**
     * Check if a property exists
     * Check if a property exists by id.
     * @param id The id of the property.
     */
    private inventoryV1PropertiesByIdHeadWithHttpInfo(id: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1PropertiesByIdHead.');
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
                search: queryParameters
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryV1PropertiesByIdHeadWithHttpInfo(id, $options);
            }
        )
    }

    /**
     * Replaces a property
     * Use this call to modify a property.
     * @param id The id of the property.
     * @param requestBody The definition of the property.
     */
    private inventoryV1PropertiesByIdPutWithHttpInfo(id: string, requestBody: models.ReplacePropertyModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryV1PropertiesByIdPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1PropertiesByIdPut.');
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
                body: requestBody == null ? '' : JSON.stringify(requestBody), // https://github.com/angular/angular/issues/10612
                search: queryParameters
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryV1PropertiesByIdPutWithHttpInfo(id, requestBody, $options);
            }
        )
    }

    /**
     * Get a properties list
     * Get the list of properties.
     */
    private inventoryV1PropertiesGetWithHttpInfo($options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties';

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
                search: queryParameters
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryV1PropertiesGetWithHttpInfo($options);
            }
        )
    }

    /**
     * Creates a property
     * Use this call to create a new property.
     * @param requestBody The definition of the property.
     */
    private inventoryV1PropertiesPostWithHttpInfo(requestBody: models.CreatePropertyModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/inventory/v1/properties';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling inventoryV1PropertiesPost.');
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
                body: requestBody == null ? '' : JSON.stringify(requestBody), // https://github.com/angular/angular/issues/10612
                search: queryParameters
            },
            Object.assign({}, this.configuration, $options),
            retryTimesToGo => {
                $options = $options || {};
                $options.retryTimes = retryTimesToGo;

                return this.inventoryV1PropertiesPostWithHttpInfo(requestBody, $options);
            }
        )
    }

}
