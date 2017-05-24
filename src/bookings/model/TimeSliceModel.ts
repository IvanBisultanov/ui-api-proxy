/**
 * Apaleo Bookings API
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

export interface TimeSliceModel {
    /**
     * The start date and time for this time slice
     */
    from: Date;

    /**
     * The end date and time for this time slice
     */
    to: Date;

    /**
     * The price for this time slice
     */
    amount: number;

}

export type TimeSliceModelWithRawHttp = TimeSliceModel & ResponseModel<TimeSliceModel>;

export namespace TimeSliceModel {
    export const $metaData = { 
        from: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        to: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        amount: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<TimeSliceModel>): FormGroup {
        const defaultControls = { 
            from: getControl($metaData.from, options, 'from'),
            to: getControl($metaData.to, options, 'to'),
            amount: getControl($metaData.amount, options, 'amount'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}
