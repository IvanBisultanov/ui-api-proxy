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

import { Validators, FormBuilder, ValidatorFn, FormGroup }          from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control }               from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData, Optional } from '../../types';
import { ResponseModel }                                            from '../../models';

export interface RateplanListModel {
    /**
     * List of rateplans
     */
    rateplans?: Array<models.RateplanItemModel>;

}

export type RateplanListModelWithRawHttp = RateplanListModel & ResponseModel<RateplanListModel>;

export interface RateplanListModel$Form<T> {
    rateplans: T;
}

export interface RateplanListModel$ValidatorFactories extends RateplanListModel$Form<ValidatorsFactory> {}
export interface RateplanListModel$ControlFactories extends RateplanListModel$Form<ControlFactory> {}
export interface RateplanListModel$Control extends RateplanListModel$Form<Control | FormGroup> {}
export interface RateplanListModel$ControlMetaData extends RateplanListModel$Form<IApaleoControlMetaData> {}

export namespace RateplanListModel {
    export const $validators: RateplanListModel$ValidatorFactories = {
        rateplans: (() => [
            
            
            
        ]),
    };

    export const $controls: RateplanListModel$ControlFactories = {
        rateplans: (() => [null, Validators.compose($validators.rateplans())]),
    };

    export const $metaData: RateplanListModel$ControlMetaData = {
        rateplans: {
            
        },
    };

    export function $buildForm(fb: FormBuilder, specificControls?: Optional<RateplanListModel$Control>, additionalControls?: { [name: string]: (Control | FormGroup) }) {
        const defaultControls = {
        };

        const group = fb.group(Object.assign(defaultControls, specificControls, additionalControls));

    

        return group;
    }
}

