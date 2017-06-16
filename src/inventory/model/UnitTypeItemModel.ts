/**
 * Inventory Management
 * Setup and manage the account’s properties and all the units to rent out: rooms, parking lots, beds, meeting rooms, etc.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

import { FormBuilder, FormGroup }                                               from '@angular/forms';
import { ResponseModel }                                                        from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup }                  from '../../functions.model';
import { BuildFormOptions, ApaleoPropertyMetaData, ApaleoEnumPropertyMetaData } from '../../types';

export interface UnitTypeItemModel {
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
    name: string;

    /**
     * The description for the unit type
     */
    description: string;

    /**
     * Minimum number of persons for the unit type
     */
    minPersons: number;

    /**
     * Maximum number of persons for the unit type
     */
    maxPersons: number;

    /**
     * The property to which the unit type belongs to
     */
    propertyId: string;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type UnitTypeItemModelWithRawHttp = UnitTypeItemModel & ResponseModel<UnitTypeItemModel>;

export namespace UnitTypeItemModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        code: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        name: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        description: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        minPersons: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        maxPersons: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<UnitTypeItemModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            code: getControl($metaData.code, options, 'code'),
            name: getControl($metaData.name, options, 'name'),
            description: getControl($metaData.description, options, 'description'),
            minPersons: getControl($metaData.minPersons, options, 'minPersons'),
            maxPersons: getControl($metaData.maxPersons, options, 'maxPersons'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

