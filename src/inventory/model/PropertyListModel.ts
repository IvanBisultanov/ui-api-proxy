/**
 * Apaleo Inventory API
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

export interface PropertyListModel {
    /**
     * List of properties
     */
    properties?: Array<models.PropertyItemModel>;

}

export type PropertyListModelWithRawHttp = PropertyListModel & ResponseModel<PropertyListModel>;

export namespace PropertyListModel {
    export const $validators = {
        properties: (() => [
        ]),
    };

    export const $controls = { 
    };

    export const $metaData = { 
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<PropertyListModel>) {
        const defaultControls = { 
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);


        return group;
    }
}

