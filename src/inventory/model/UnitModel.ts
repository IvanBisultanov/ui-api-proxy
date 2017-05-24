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

import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface UnitModel {
    /**
     * The unit id
     */
    id: string;

    /**
     * The name for the unit
     */
    name: string;

    /**
     * The description for the unit
     */
    description: { [key: string]: string; };

    /**
     * The property to which the unit belongs to
     */
    property: models.EmbeddedPropertyModel;

    /**
     * The unit type
     */
    unitType?: models.EmbeddedUnitTypeModel;

    /**
     * Minimum number of persons for the unit
     */
    minPersons: number;

    /**
     * Maximum number of persons for the unit
     */
    maxPersons: number;

}

export type UnitModelWithRawHttp = UnitModel & ResponseModel<UnitModel>;

export namespace UnitModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        name: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        description: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
        property: Object.freeze({ 
            isRequired: true,
            type: 'models.EmbeddedPropertyModel',
        } as IApaleoPropertyMetaData),
        unitType: Object.freeze({ 
            type: 'models.EmbeddedUnitTypeModel',
        } as IApaleoPropertyMetaData),
        minPersons: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        maxPersons: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<UnitModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            name: getControl($metaData.name, options, 'name'),
            property: models.EmbeddedPropertyModel.$buildForm(fb),
            unitType: models.EmbeddedUnitTypeModel.$buildForm(fb),
            minPersons: getControl($metaData.minPersons, options, 'minPersons'),
            maxPersons: getControl($metaData.maxPersons, options, 'maxPersons'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

