import { Type } from '@angular/core';
import { ApiModule } from './types';

export * from './configuration';
export * from './variables';

import * as _account from './account';
export const account = _account;
export const accountApiModule: Type<ApiModule> = _account.Module;

import * as _inventory from './inventory';
export const inventory = _inventory;
export const inventoryApiModule: Type<ApiModule> = _account.Module;

import * as _rates from './rates';
export const rates = _rates;
export const ratesApiModule: Type<ApiModule> = _account.Module;

import * as _booking from './booking';
export const booking = _booking;
export const bookingApiModule: Type<ApiModule> = _account.Module;

import * as _settings from './settings';
export const settings = _settings;
export const settingsApiModule: Type<ApiModule> = _account.Module;

import * as _finance from './finance';
export const finance = _finance;
export const financeApiModule: Type<ApiModule> = _account.Module;

