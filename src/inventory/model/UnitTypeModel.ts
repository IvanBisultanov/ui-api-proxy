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

/**
 * With this request you can create a new property
 */
import { FormBuilder, FormGroup }                                               from '@angular/forms';
import { ResponseModel }                                                        from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup }                  from '../../functions.model';
import { BuildFormOptions, ApaleoPropertyMetaData, ApaleoEnumPropertyMetaData } from '../../types';

export interface UnitTypeModel {
    /**
     * The unit type id
     */
    id: string;

    /**
     * The code for the unit type that can be shown in reports and table views
     */
    code: string;

    /**
     * The property to which the unit type belongs to
     */
    property: models.EmbeddedPropertyModel;

    /**
     * The name for the unit type
     */
    name: { [key: string]: string; };

    /**
     * The description for the unit type
     */
    description: { [key: string]: string; };

    /**
     * Minimum number of persons for the unit type
     */
    minPersons: number;

    /**
     * Maximum number of persons for the unit type
     */
    maxPersons: number;

}

export type UnitTypeModelWithRawHttp = UnitTypeModel & ResponseModel<UnitTypeModel>;

export namespace UnitTypeModel {
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
        property: Object.freeze({ 
            isRequired: true,
            type: 'models.EmbeddedPropertyModel',
        } as ApaleoPropertyMetaData),
        name: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
        description: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
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
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<UnitTypeModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            code: getControl($metaData.code, options, 'code'),
            property: models.EmbeddedPropertyModel.$buildForm(fb),
            minPersons: getControl($metaData.minPersons, options, 'minPersons'),
            maxPersons: getControl($metaData.maxPersons, options, 'maxPersons'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

