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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl }  from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }                from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                    from '../../types';
import { ResponseModel }                                                     from '../../models';
import { getControl, getControlOptions, adjustDefaultControls, setMetaData } from '../../functions';

export interface RateplanListModel {
    /**
     * List of rateplans
     */
    rateplans?: Array<models.RateplanItemModel>;

}

export type RateplanListModelWithRawHttp = RateplanListModel & ResponseModel<RateplanListModel>;

export namespace RateplanListModel {
    export const $validators = {
        rateplans: (() => [
        ]),
    };

    export const $controls = { 
    };

    export const $metaData = { 
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<RateplanListModel>) {
        const defaultControls = { 
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);


        return group;
    }
}

