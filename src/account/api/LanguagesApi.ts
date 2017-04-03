/**
 * Apaleo Account API
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
import { callApiEndpoint }                                   from '../../functions';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class LanguagesApi {
    public defaultHeaders: Headers = new Headers();

    constructor(
        protected readonly http: Http, 
        protected readonly configuration: Configuration,
        @Inject(LOCALE_ID) protected readonly locale: string, 
        @Inject(BASE_PATH) protected readonly basePath: string) {

        this.defaultHeaders.append('Accept-Language', locale);
    }

    /**
     * Get the language settings for the account
     * Get the language settings
     * @param code The code of the account.
     */
    public accountV1AccountsByCodeLanguagesGet(code: string, $options?: IRequestOptions)
        : Observable<models.LanguagesModel | undefined> {
        return this.accountV1AccountsByCodeLanguagesGetWithRawHttp(code, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }

    /**
     * Replaces the language settings for the account
     * Use this call to modify the language settings of the account.
     * @param code The code of the account.
     * @param requestBody The definition of the language settings.
     */
    public accountV1AccountsByCodeLanguagesPut(code: string, requestBody: models.ReplaceLanguagesModel, $options?: IRequestOptions)
        : Observable<void> {
        return this.accountV1AccountsByCodeLanguagesPutWithRawHttp(code, requestBody, $options)
            .map(response => response.$hasValue(response) ? response : undefined);
    }


    /**
     * Get the language settings for the account
     * Get the language settings
     * @param code The code of the account.
     */
    public accountV1AccountsByCodeLanguagesGetWithRawHttp(code: string, $options?: IRequestOptions)
        : Observable<ResponseModel<models.LanguagesModel>> {
        return this.accountV1AccountsByCodeLanguagesGetWithHttpInfo(code, $options)
            .map((response: Response) => new ResponseModel(response));
    }

    /**
     * Replaces the language settings for the account
     * Use this call to modify the language settings of the account.
     * @param code The code of the account.
     * @param requestBody The definition of the language settings.
     */
    public accountV1AccountsByCodeLanguagesPutWithRawHttp(code: string, requestBody: models.ReplaceLanguagesModel, $options?: IRequestOptions)
        : Observable<ResponseModel<void>> {
        return this.accountV1AccountsByCodeLanguagesPutWithHttpInfo(code, requestBody, $options)
            .map((response: Response) => new ResponseModel(response));
    }


    /**
     * Get the language settings for the account
     * Get the language settings
     * @param code The code of the account.
     */
    private accountV1AccountsByCodeLanguagesGetWithHttpInfo(code: string, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/account/v1/accounts/${code}/languages'
                    .replace('${' + 'code' + '}', String(code));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling accountV1AccountsByCodeLanguagesGet.');
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

                return this.accountV1AccountsByCodeLanguagesGetWithHttpInfo(code, $options);
            }
        )
    }

    /**
     * Replaces the language settings for the account
     * Use this call to modify the language settings of the account.
     * @param code The code of the account.
     * @param requestBody The definition of the language settings.
     */
    private accountV1AccountsByCodeLanguagesPutWithHttpInfo(code: string, requestBody: models.ReplaceLanguagesModel, $options?: IRequestOptions): Observable<Response> {
        const path = this.basePath + '/account/v1/accounts/${code}/languages'
                    .replace('${' + 'code' + '}', String(code));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling accountV1AccountsByCodeLanguagesPut.');
        }
        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling accountV1AccountsByCodeLanguagesPut.');
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

                return this.accountV1AccountsByCodeLanguagesPutWithHttpInfo(code, requestBody, $options);
            }
        )
    }

}
