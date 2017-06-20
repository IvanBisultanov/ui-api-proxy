import { ApiModule } from './types';

export * from './configuration';
export * from './variables';

import * as _account from './account';
export const account = _account;
export const accountApiModule: ApiModule = _account.Module;

import * as _inventory from './inventory';
export const inventory = _inventory;
export const inventoryApiModule: ApiModule = _account.Module;

import * as _rates from './rates';
export const rates = _rates;
export const ratesApiModule: ApiModule = _account.Module;

import * as _booking from './booking';
export const booking = _booking;
export const bookingApiModule: ApiModule = _account.Module;

import * as _settings from './settings';
export const settings = _settings;
export const settingsApiModule: ApiModule = _account.Module;

import * as _finance from './finance';
export const finance = _finance;
export const financeApiModule: ApiModule = _account.Module;

