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
import { ValidatorsFactory, ControlFactory, Control }      from '../../types';
import { ResponseModel }                                   from '../../models';

export interface RateplanModel {
    /**
     * The rateplan id
     */
    id?: string;

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

export type RateplanModelWithRawHttp = RateplanModel & ResponseModel<RateplanModel>;

export interface RateplanModel$Form<T> {
    id: T;
    code: T;
    propertyCode: T;
    name: T;
    defaultPrice: T;
}

export interface RateplanModel$ValidatorFactories extends RateplanModel$Form<ValidatorsFactory> {}
export interface RateplanModel$ControlFactories extends RateplanModel$Form<ControlFactory> {}

const $validators: RateplanModel$ValidatorFactories = {
    id: (() => [
        
        
        
    ]),
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

const $controls: RateplanModel$ControlFactories = {
    id: (() => [null, Validators.compose($validators.id())]),
    code: (() => [null, Validators.compose($validators.code())]),
    propertyCode: (() => [null, Validators.compose($validators.propertyCode())]),
    name: (() => [null, Validators.compose($validators.name())]),
    defaultPrice: (() => [null, Validators.compose($validators.defaultPrice())]),
}

export const RateplanModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
            id: $controls.id(),
            code: $controls.code(),
            propertyCode: $controls.propertyCode(),
            name: $controls.name(),
            defaultPrice: $controls.defaultPrice(),
        })),
}

