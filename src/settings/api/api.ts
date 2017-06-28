import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './LanguagesApi';
import { LanguagesApi } from './LanguagesApi';

export * from './PropertySettingsApi';
import { PropertySettingsApi } from './PropertySettingsApi';

export * from './TimeSliceDefinitionsApi';
import { TimeSliceDefinitionsApi } from './TimeSliceDefinitionsApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';

export const APIS = [
    LanguagesApi, PropertySettingsApi, TimeSliceDefinitionsApi
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

export function TimeSliceDefinitionsApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: TimeSliceDefinitionsApi) {
    return parent || new TimeSliceDefinitionsApi(http, config, locale, basePath);
}

export const TimeSliceDefinitionsApiProvider: Provider = {
    provide: TimeSliceDefinitionsApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), TimeSliceDefinitionsApi]
    ],
    useFactory: TimeSliceDefinitionsApiFactory
}

export const API_PROVIDERS: Provider[] = [
    LanguagesApiProvider, PropertySettingsApiProvider, TimeSliceDefinitionsApiProvider
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

