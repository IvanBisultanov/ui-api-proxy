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

export interface DeleteRateListModel {
    /**
     * The start date for the deletion
     */
    from: Date;

    /**
     * The end date for the deletion
     */
    to: Date;

}

export type DeleteRateListModelWithRawHttp = DeleteRateListModel & ResponseModel<DeleteRateListModel>;

export namespace DeleteRateListModel {
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
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<DeleteRateListModel>): FormGroup {
        const defaultControls = { 
            from: getControl($metaData.from, options, 'from'),
            to: getControl($metaData.to, options, 'to'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

