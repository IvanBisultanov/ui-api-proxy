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
 * With this request you can modify an account
 */
import { Validators, FormBuilder, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface UpdateAccountModel {
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

export interface UpdateAccountModel$Form<T> {
    name: T;
    description: T;
    logoUrl: T;
    location: T;
}

export interface UpdateAccountModel$ValidatorFactories extends UpdateAccountModel$Form<ValidatorsFactory> {}
export interface UpdateAccountModel$ControlFactories extends UpdateAccountModel$Form<ControlFactory> {}

const $validators: UpdateAccountModel$ValidatorFactories = {
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

const $controls: UpdateAccountModel$ControlFactories = {
    name: (() => [null, Validators.compose($validators.name())]),
    description: (() => [null, Validators.compose($validators.description())]),
    logoUrl: (() => [null, Validators.compose($validators.logoUrl())]),
    location: (() => [null, Validators.compose($validators.location())]),
}

export const UpdateAccountModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
            name: $controls.name(),
            description: $controls.description(),
            logoUrl: $controls.logoUrl(),
            location: models.Location.$buildForm(fb),
        })),
}

