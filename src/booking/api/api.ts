import { NgModule, Provider, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

export * from './BookingApi';
import { BookingApi } from './BookingApi';

export * from './OfferApi';
import { OfferApi } from './OfferApi';

export * from './ReservationApi';
import { ReservationApi } from './ReservationApi';

export * from './ReservationActionsApi';
import { ReservationActionsApi } from './ReservationActionsApi';

export * from './UnitAvailabilityApi';
import { UnitAvailabilityApi } from './UnitAvailabilityApi';

import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../variables';
import { ApiModule } from '../../types';

export const APIS = [
    BookingApi, OfferApi, ReservationApi, ReservationActionsApi, UnitAvailabilityApi
];

export function BookingApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: BookingApi) {
    return parent || new BookingApi(http, config, locale, basePath);
}

export const BookingApiProvider: Provider = {
    provide: BookingApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), BookingApi]
    ],
    useFactory: BookingApiFactory
}

export function OfferApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: OfferApi) {
    return parent || new OfferApi(http, config, locale, basePath);
}

export const OfferApiProvider: Provider = {
    provide: OfferApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), OfferApi]
    ],
    useFactory: OfferApiFactory
}

export function ReservationApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: ReservationApi) {
    return parent || new ReservationApi(http, config, locale, basePath);
}

export const ReservationApiProvider: Provider = {
    provide: ReservationApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), ReservationApi]
    ],
    useFactory: ReservationApiFactory
}

export function ReservationActionsApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: ReservationActionsApi) {
    return parent || new ReservationActionsApi(http, config, locale, basePath);
}

export const ReservationActionsApiProvider: Provider = {
    provide: ReservationActionsApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), ReservationActionsApi]
    ],
    useFactory: ReservationActionsApiFactory
}

export function UnitAvailabilityApiFactory(http: Http, config: Configuration, locale: string, basePath: string, parent?: UnitAvailabilityApi) {
    return parent || new UnitAvailabilityApi(http, config, locale, basePath);
}

export const UnitAvailabilityApiProvider: Provider = {
    provide: UnitAvailabilityApi,
    deps: [
        Http,
        Configuration,
        LOCALE_ID,
        BASE_PATH,
        [new Optional(), new SkipSelf(), UnitAvailabilityApi]
    ],
    useFactory: UnitAvailabilityApiFactory
}

export const API_PROVIDERS: Provider[] = [
    BookingApiProvider, OfferApiProvider, ReservationApiProvider, ReservationActionsApiProvider, UnitAvailabilityApiProvider
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

