/**
 * Rates Management
 * Manage the rate plans and rates to rent out your inventory at the best price.
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

export interface ReplaceRatePlanModel {
    /**
     * The name for the rateplan
     */
    name: { [key: string]: string; };

    /**
     * The description for the rateplan
     */
    description: { [key: string]: string; };

    /**
     * The unit types ids to link to the rateplan
     */
    unitTypeIds?: Array<string>;

    /**
     * Time periods when the rateplan is sold
     */
    bookingPeriods?: Array<models.BookingPeriodModel>;

}

export type ReplaceRatePlanModelWithRawHttp = ReplaceRatePlanModel & ResponseModel<ReplaceRatePlanModel>;

export namespace ReplaceRatePlanModel {
    export const $metaData = { 
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
        unitTypeIds: Object.freeze({ 
            type: 'Array<string>',
            isPrimitiveType: true,
            isListContainer: true,
        } as ApaleoPropertyMetaData),
        bookingPeriods: Object.freeze({ 
            type: 'Array<models.BookingPeriodModel>',
            isListContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<ReplaceRatePlanModel>): FormGroup {
        const defaultControls = { 
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

