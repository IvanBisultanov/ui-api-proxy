import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './PropertyApi';
import { PropertyApi } from './PropertyApi';

export * from './UnitApi';
import { UnitApi } from './UnitApi';

export * from './UnitTypeApi';
import { UnitTypeApi } from './UnitTypeApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';

export const APIS = [
    PropertyApi, UnitApi, UnitTypeApi
];

export function PropertyApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: PropertyApi) {
    return parent || new PropertyApi(http, config, locale, basePath);
}

export const PropertyApiProvider: Provider = {
    provide: PropertyApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), PropertyApi]
    ],
    useFactory: PropertyApiFactory
}

export function UnitApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: UnitApi) {
    return parent || new UnitApi(http, config, locale, basePath);
}

export const UnitApiProvider: Provider = {
    provide: UnitApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), UnitApi]
    ],
    useFactory: UnitApiFactory
}

export function UnitTypeApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: UnitTypeApi) {
    return parent || new UnitTypeApi(http, config, locale, basePath);
}

export const UnitTypeApiProvider: Provider = {
    provide: UnitTypeApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), UnitTypeApi]
    ],
    useFactory: UnitTypeApiFactory
}

export const API_PROVIDERS: Provider[] = [
    PropertyApiProvider, UnitApiProvider, UnitTypeApiProvider
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
export class Module {}

