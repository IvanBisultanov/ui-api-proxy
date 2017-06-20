import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './FolioApi';
import { FolioApi } from './FolioApi';

export * from './FolioActionsApi';
import { FolioActionsApi } from './FolioActionsApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';
import { ApiModule } from '../../types';

export const APIS = [
    FolioApi, FolioActionsApi
];

export function FolioApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: FolioApi) {
    return parent || new FolioApi(http, config, locale, basePath);
}

export const FolioApiProvider: Provider = {
    provide: FolioApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), FolioApi]
    ],
    useFactory: FolioApiFactory
}

export function FolioActionsApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: FolioActionsApi) {
    return parent || new FolioActionsApi(http, config, locale, basePath);
}

export const FolioActionsApiProvider: Provider = {
    provide: FolioActionsApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), FolioActionsApi]
    ],
    useFactory: FolioActionsApiFactory
}

export const API_PROVIDERS: Provider[] = [
    FolioApiProvider, FolioActionsApiProvider
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

