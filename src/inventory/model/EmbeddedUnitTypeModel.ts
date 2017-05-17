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

import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface EmbeddedUnitTypeModel {
    /**
     * The unit type id
     */
    id: string;

    /**
     * The code for the unit type that can be shown in reports and table views
     */
    code: string;

    /**
     * The name for the unit type
     */
    name?: string;

    /**
     * The description for the unit type
     */
    description?: string;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type EmbeddedUnitTypeModelWithRawHttp = EmbeddedUnitTypeModel & ResponseModel<EmbeddedUnitTypeModel>;

export namespace EmbeddedUnitTypeModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        code: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        name: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        description: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<EmbeddedUnitTypeModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            code: getControl($metaData.code, options, 'code'),
            name: getControl($metaData.name, options, 'name'),
            description: getControl($metaData.description, options, 'description'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

