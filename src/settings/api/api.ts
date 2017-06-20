import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './LanguagesApi';
import { LanguagesApi } from './LanguagesApi';

export * from './PropertySettingsApi';
import { PropertySettingsApi } from './PropertySettingsApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';

export const APIS = [
    LanguagesApi, PropertySettingsApi
];

export function LanguagesApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: LanguagesApi) {
    return parent || new LanguagesApi(http, config, locale, basePath);
}

export const LanguagesApiProvider: Provider = {
    provide: LanguagesApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), LanguagesApi]
    ],
    useFactory: LanguagesApiFactory
}

export function PropertySettingsApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: PropertySettingsApi) {
    return parent || new PropertySettingsApi(http, config, locale, basePath);
}

export const PropertySettingsApiProvider: Provider = {
    provide: PropertySettingsApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), PropertySettingsApi]
    ],
    useFactory: PropertySettingsApiFactory
}

export const API_PROVIDERS: Provider[] = [
    LanguagesApiProvider, PropertySettingsApiProvider
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

