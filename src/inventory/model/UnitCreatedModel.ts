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

import { FormBuilder, FormGroup }                         from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }     from '../../types';
import { ResponseModel }                                  from '../../models';
import { getControl, adjustDefaultControls, setMetaData } from '../../functions.model';

export interface UnitCreatedModel {
    /**
     * The unit id
     */
    id?: string;

}

export type UnitCreatedModelWithRawHttp = UnitCreatedModel & ResponseModel<UnitCreatedModel>;

export namespace UnitCreatedModel {
    export const $metaData = { 
        id: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<UnitCreatedModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

