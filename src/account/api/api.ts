import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './AccountApi';
import { AccountApi } from './AccountApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';
import { ApiModule } from '../../types';

export const APIS = [
    AccountApi
];

export function AccountApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: AccountApi) {
    return parent || new AccountApi(http, config, locale, basePath);
}

export const AccountApiProvider: Provider = {
    provide: AccountApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), AccountApi]
    ],
    useFactory: AccountApiFactory
}

export const API_PROVIDERS: Provider[] = [
    AccountApiProvider
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

