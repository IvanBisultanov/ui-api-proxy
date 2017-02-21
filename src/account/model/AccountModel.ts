/**
 * Apaleo Account API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * With this request you can create a new account
 */
import { Validators } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface AccountModel {
    /**
     * The code for the account that can be shown in reports and table views
     */
    code: string;

    /**
     * The name for the account, which usually should be the company name
     */
    name: string;

    /**
     * The description for the account
     */
    description: string;

    /**
     * The URL of the account logo
     */
    logoUrl?: string;

    /**
     * The location of the account
     */
    location: models.Location;

}

export interface AccountModel$Form<T> {
    code: T;
    name: T;
    description: T;
    logoUrl: T;
    location: T;
}

export interface AccountModel$ValidatorFactories extends AccountModel$Form<ValidatorsFactory> {}
export interface AccountModel$ControlFactories extends AccountModel$Form<ControlFactory> {}

export interface AccountModel$FormBuiler {
    code: Control;
    name: Control;
    description: Control;
    logoUrl: Control;
    location: models.Location$FormBuilder;
}

const $validators: AccountModel$ValidatorFactories = {
    code: (() => [
        Validators.required,
        
        Validators.maxLength(10),
    ]),
    name: (() => [
        Validators.required,
        
        Validators.maxLength(40),
    ]),
    description: (() => [
        Validators.required,
        
        
    ]),
    logoUrl: (() => [
        
        
        
    ]),
    location: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: AccountModel$ControlFactories = {
    code: (() => [null, Validators.compose($validators.code())]),
    name: (() => [null, Validators.compose($validators.name())]),
    description: (() => [null, Validators.compose($validators.description())]),
    logoUrl: (() => [null, Validators.compose($validators.logoUrl())]),
    location: (() => [null, Validators.compose($validators.location())]),
}

export const AccountModel = {
    $validators: $validators,
    $controls: $controls,
    $formGroup: (() => {
        return {
            code: $controls.code(),
            name: $controls.name(),
            description: $controls.description(),
            logoUrl: $controls.logoUrl(),
            location: models.Location.$formGroup(),
        };
    }) as (() => AccountModel$FormBuiler),
}

