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

import { Validators } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface PostRateplanRequest {
    /**
     * The code for the rateplan that can be shown in reports and table views
     */
    code: string;

    /**
     * The name for the rateplan
     */
    name: { [key: string]: string; };

    /**
     * The default price for the rateplan
     */
    defaultPrice: number;

}

export interface PostRateplanRequest$Form<T> {
    code: T;
    name: T;
    defaultPrice: T;
}

export interface PostRateplanRequest$ValidatorFactories extends PostRateplanRequest$Form<ValidatorsFactory> {}
export interface PostRateplanRequest$ControlFactories extends PostRateplanRequest$Form<ControlFactory> {}

export interface PostRateplanRequest$FormBuilder {
    code: Control;
    name: Control;
    defaultPrice: Control;
}

const $validators: PostRateplanRequest$ValidatorFactories = {
    code: (() => [
        Validators.required,
        
        Validators.maxLength(10),
    ]),
    name: (() => [
        Validators.required,
        
        
    ]),
    defaultPrice: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: PostRateplanRequest$ControlFactories = {
    code: (() => [null, Validators.compose($validators.code())]),
    name: (() => [null, Validators.compose($validators.name())]),
    defaultPrice: (() => [null, Validators.compose($validators.defaultPrice())]),
}

export const PostRateplanRequest = {
    $validators: $validators,
    $controls: $controls,
    $formGroup: (() => {
        return {
            code: $controls.code(),
            name: $controls.name(),
            defaultPrice: $controls.defaultPrice(),
        };
    }) as (() => PostRateplanRequest$FormBuilder),
}
