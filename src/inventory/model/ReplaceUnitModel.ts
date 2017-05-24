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

export interface ReplaceUnitModel {
    /**
     * The name for the unit
     */
    name: string;

    /**
     * The description for the unit
     */
    description: { [key: string]: string; };

    /**
     * The id of the unit type
     */
    unitTypeId?: string;

    /**
     * Minimum number of persons for the unit
     */
    minPersons?: number;

    /**
     * Maximum number of persons for the unit
     */
    maxPersons?: number;

}

export type ReplaceUnitModelWithRawHttp = ReplaceUnitModel & ResponseModel<ReplaceUnitModel>;

export namespace ReplaceUnitModel {
    export const $metaData = { 
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
        unitTypeId: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        minPersons: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        maxPersons: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplaceUnitModel>): FormGroup {
        const defaultControls = { 
            name: getControl($metaData.name, options, 'name'),
            unitTypeId: getControl($metaData.unitTypeId, options, 'unitTypeId'),
            minPersons: getControl($metaData.minPersons, options, 'minPersons'),
            maxPersons: getControl($metaData.maxPersons, options, 'maxPersons'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

