import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './FolioApi';
import { FolioApi } from './FolioApi';

export * from './FolioActionsApi';
import { FolioActionsApi } from './FolioActionsApi';

export * from './InvoiceApi';
import { InvoiceApi } from './InvoiceApi';

export * from './SubLedgerApi';
import { SubLedgerApi } from './SubLedgerApi';

export * from './TypesApi';
import { TypesApi } from './TypesApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';

export const APIS = [
    FolioApi, FolioActionsApi, InvoiceApi, SubLedgerApi, TypesApi
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

export function InvoiceApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: InvoiceApi) {
    return parent || new InvoiceApi(http, config, locale, basePath);
}

export const InvoiceApiProvider: Provider = {
    provide: InvoiceApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), InvoiceApi]
    ],
    useFactory: InvoiceApiFactory
}

export function SubLedgerApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: SubLedgerApi) {
    return parent || new SubLedgerApi(http, config, locale, basePath);
}

export const SubLedgerApiProvider: Provider = {
    provide: SubLedgerApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), SubLedgerApi]
    ],
    useFactory: SubLedgerApiFactory
}

export function TypesApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: TypesApi) {
    return parent || new TypesApi(http, config, locale, basePath);
}

export const TypesApiProvider: Provider = {
    provide: TypesApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), TypesApi]
    ],
    useFactory: TypesApiFactory
}

export const API_PROVIDERS: Provider[] = [
    FolioApiProvider, FolioActionsApiProvider, InvoiceApiProvider, SubLedgerApiProvider, TypesApiProvider
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

