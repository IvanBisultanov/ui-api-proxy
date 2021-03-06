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

export interface CreateRatePlanModel {
    /**
     * The code for the rate plan that can be shown in reports and table views
     */
    code: string;

    /**
     * The id of the property where the rate plan will be created
     */
    propertyId: string;

    /**
     * The name for the rate plan
     */
    name: { [key: string]: string; };

    /**
     * The description for the rate plan
     */
    description: { [key: string]: string; };

    /**
     * The id of the time slice definition for the rate plan
     */
    timeSliceDefinitionId: string;

    /**
     * The unit types ids to link to the rate plan
     */
    unitTypeIds?: Array<string>;

    /**
     * Time periods when the rateplan is sold
     */
    bookingPeriods?: Array<models.BookingPeriodModel>;

}

export type CreateRatePlanModelWithRawHttp = CreateRatePlanModel & ResponseModel<CreateRatePlanModel>;

export namespace CreateRatePlanModel {
    export const $metaData = { 
        code: Object.freeze({ 
            isRequired: true,
            minLength: 3,
            maxLength: 10,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
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
        timeSliceDefinitionId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
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

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<CreateRatePlanModel>): FormGroup {
        const defaultControls = { 
            code: getControl($metaData.code, options, 'code'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
            timeSliceDefinitionId: getControl($metaData.timeSliceDefinitionId, options, 'timeSliceDefinitionId'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

