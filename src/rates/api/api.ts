import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './RateApi';
import { RateApi } from './RateApi';

export * from './RatePlanApi';
import { RatePlanApi } from './RatePlanApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';
import { ApiModule } from '../../types';

export const APIS = [
    RateApi, RatePlanApi
];

export function RateApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: RateApi) {
    return parent || new RateApi(http, config, locale, basePath);
}

export const RateApiProvider: Provider = {
    provide: RateApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), RateApi]
    ],
    useFactory: RateApiFactory
}

export function RatePlanApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: RatePlanApi) {
    return parent || new RatePlanApi(http, config, locale, basePath);
}

export const RatePlanApiProvider: Provider = {
    provide: RatePlanApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), RatePlanApi]
    ],
    useFactory: RatePlanApiFactory
}

export const API_PROVIDERS: Provider[] = [
    RateApiProvider, RatePlanApiProvider
];

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        ...API_PROVIDERS
    ]
})
export class Module implements ApiModule {}

