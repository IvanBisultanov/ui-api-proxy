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
 * With this request you can modify the language settings for the account
 */
import { Validators, FormBuilder, ValidatorFn, FormGroup }                      from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control, IApaleoAbstractControl }   from '../../types';
import { ResponseModel }                                                        from '../../models';

export interface LanguagesModel {
    /**
     * The languages for the account
     */
    languages: Array<models.LanguageModel>;

}

export type LanguagesModelWithRawHttp = LanguagesModel & ResponseModel<LanguagesModel>;

export interface LanguagesModel$Form<T> {
    languages: T;
}

export interface LanguagesModel$ValidatorFactories extends LanguagesModel$Form<ValidatorsFactory> {}
export interface LanguagesModel$ControlFactories extends LanguagesModel$Form<ControlFactory> {}

const $validators: LanguagesModel$ValidatorFactories = {
    languages: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: LanguagesModel$ControlFactories = {
    languages: (() => [null, Validators.compose($validators.languages())]),
}

export const LanguagesModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) => {
        const group = fb.group({
        });

    

        return group;
    })
}

