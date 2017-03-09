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

import { Validators, FormBuilder, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control }      from '../../types';
import { ResponseModel }                                   from '../../models';

export interface LanguageModel {
    code: string;

    default: boolean;

    mandatory: boolean;

}

export type LanguageModelWithRawHttp = LanguageModel & ResponseModel<LanguageModel>;

export interface LanguageModel$Form<T> {
    code: T;
    default: T;
    mandatory: T;
}

export interface LanguageModel$ValidatorFactories extends LanguageModel$Form<ValidatorsFactory> {}
export interface LanguageModel$ControlFactories extends LanguageModel$Form<ControlFactory> {}

const $validators: LanguageModel$ValidatorFactories = {
    code: (() => [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
    ]),
    default: (() => [
        Validators.required,
        
        
    ]),
    mandatory: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: LanguageModel$ControlFactories = {
    code: (() => [null, Validators.compose($validators.code())]),
    default: (() => [null, Validators.compose($validators.default())]),
    mandatory: (() => [null, Validators.compose($validators.mandatory())]),
}

export const LanguageModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
            code: $controls.code(),
            default: $controls.default(),
            mandatory: $controls.mandatory(),
        })),
}

