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

import { Validators, FormBuilder, ValidatorFn, FormGroup }                      from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control, IApaleoAbstractControl }   from '../../types';
import { ResponseModel }                                                        from '../../models';

export interface UnitTypeOfferModel {
    /**
     * The unit type for which the following offers apply
     */
    unitType?: string;

    /**
     * The unit type for which the following offers apply
     */
    offers?: Array<models.OfferModel>;

}

export type UnitTypeOfferModelWithRawHttp = UnitTypeOfferModel & ResponseModel<UnitTypeOfferModel>;

export interface UnitTypeOfferModel$Form<T> {
    unitType: T;
    offers: T;
}

export interface UnitTypeOfferModel$ValidatorFactories extends UnitTypeOfferModel$Form<ValidatorsFactory> {}
export interface UnitTypeOfferModel$ControlFactories extends UnitTypeOfferModel$Form<ControlFactory> {}

const $validators: UnitTypeOfferModel$ValidatorFactories = {
    unitType: (() => [
        
        
        
    ]),
    offers: (() => [
        
        
        
    ]),
}

const $controls: UnitTypeOfferModel$ControlFactories = {
    unitType: (() => [null, Validators.compose($validators.unitType())]),
    offers: (() => [null, Validators.compose($validators.offers())]),
}

export const UnitTypeOfferModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) => {
        const group = fb.group({
            unitType: $controls.unitType(),
        });

    
    

        return group;
    })
}

