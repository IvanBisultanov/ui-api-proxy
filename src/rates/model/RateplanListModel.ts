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

export interface RateplanListModel {
    /**
     * List of rateplans
     */
    rateplans?: Array<models.RateplanModel>;

}

export interface RateplanListModel$Form<T> {
    rateplans: T;
}

export interface RateplanListModel$ValidatorFactories extends RateplanListModel$Form<ValidatorsFactory> {}
export interface RateplanListModel$ControlFactories extends RateplanListModel$Form<ControlFactory> {}

const $validators: RateplanListModel$ValidatorFactories = {
    rateplans: (() => [
        
        
        
    ]),
}

const $controls: RateplanListModel$ControlFactories = {
    rateplans: (() => [null, Validators.compose($validators.rateplans())]),
}

export const RateplanListModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
        })),
}
