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

export interface PropertySettingsModel {
    /**
     * The time zone
     */
    timeZone: string;

    /**
     * The default check-in time
     */
    defaultCheckInTime: string;

    /**
     * The default check-out time
     */
    defaultCheckOutTime: string;

}

export type PropertySettingsModelWithRawHttp = PropertySettingsModel & ResponseModel<PropertySettingsModel>;

export namespace PropertySettingsModel {
    export const $metaData = { 
        timeZone: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        defaultCheckInTime: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        defaultCheckOutTime: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<PropertySettingsModel>): FormGroup {
        const defaultControls = { 
            timeZone: getControl($metaData.timeZone, options, 'timeZone'),
            defaultCheckInTime: getControl($metaData.defaultCheckInTime, options, 'defaultCheckInTime'),
            defaultCheckOutTime: getControl($metaData.defaultCheckOutTime, options, 'defaultCheckOutTime'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

