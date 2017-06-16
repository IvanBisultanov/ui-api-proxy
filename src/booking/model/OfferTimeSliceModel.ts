/**
 * Booking
 * Resources and methods to manage guest journeys.
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

export interface OfferTimeSliceModel {
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
    amount: models.AmountModel;

}

export type OfferTimeSliceModelWithRawHttp = OfferTimeSliceModel & ResponseModel<OfferTimeSliceModel>;

export namespace OfferTimeSliceModel {
    export const $metaData = { 
        from: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        to: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        amount: Object.freeze({ 
            isRequired: true,
            type: 'models.AmountModel',
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<OfferTimeSliceModel>): FormGroup {
        const defaultControls = { 
            from: getControl($metaData.from, options, 'from'),
            to: getControl($metaData.to, options, 'to'),
            amount: models.AmountModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

