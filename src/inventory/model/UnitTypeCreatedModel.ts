/**
 * Inventory Management
 * Set up hotels, rooms, room categories and other units in the portfolio.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface UnitTypeCreatedModel {
    /**
     * The unit type id
     */
    id: string;

}

export type UnitTypeCreatedModelWithRawHttp = UnitTypeCreatedModel & ResponseModel<UnitTypeCreatedModel>;

export namespace UnitTypeCreatedModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<UnitTypeCreatedModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

