/**
 * Apaleo Rates API
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

import { Validators, FormBuilder, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface CreateRateplanModel {
    /**
     * The code for the rateplan that can be shown in reports and table views
     */
    code: string;

    /**
     * The code of the property where rateplan will be created
     */
    propertyCode?: string;

    /**
     * The name for the rateplan
     */
    name: { [key: string]: string; };

    /**
     * The default price for the rateplan
     */
    defaultPrice: number;

}

export interface CreateRateplanModel$Form<T> {
    code: T;
    propertyCode: T;
    name: T;
    defaultPrice: T;
}

export interface CreateRateplanModel$ValidatorFactories extends CreateRateplanModel$Form<ValidatorsFactory> {}
export interface CreateRateplanModel$ControlFactories extends CreateRateplanModel$Form<ControlFactory> {}

const $validators: CreateRateplanModel$ValidatorFactories = {
    code: (() => [
        Validators.required,
        
        Validators.maxLength(10),
    ]),
    propertyCode: (() => [
        
        
        
    ]),
    name: (() => [
        Validators.required,
        
        
    ]),
    defaultPrice: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: CreateRateplanModel$ControlFactories = {
    code: (() => [null, Validators.compose($validators.code())]),
    propertyCode: (() => [null, Validators.compose($validators.propertyCode())]),
    name: (() => [null, Validators.compose($validators.name())]),
    defaultPrice: (() => [null, Validators.compose($validators.defaultPrice())]),
}

export const CreateRateplanModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
            code: $controls.code(),
            propertyCode: $controls.propertyCode(),
            name: $controls.name(),
            defaultPrice: $controls.defaultPrice(),
        })),
}

