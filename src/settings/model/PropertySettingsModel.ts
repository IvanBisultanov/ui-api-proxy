/**
 * Settings
 * Set up and change global account and property settings.
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

    /**
     * The currency a property works with.
     */
    currency?: string;

}

export type PropertySettingsModelWithRawHttp = PropertySettingsModel & ResponseModel<PropertySettingsModel>;

export namespace PropertySettingsModel {
    export const $metaData = { 
        timeZone: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        defaultCheckInTime: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        defaultCheckOutTime: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        currency: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<PropertySettingsModel>): FormGroup {
        const defaultControls = { 
            timeZone: getControl($metaData.timeZone, options, 'timeZone'),
            defaultCheckInTime: getControl($metaData.defaultCheckInTime, options, 'defaultCheckInTime'),
            defaultCheckOutTime: getControl($metaData.defaultCheckOutTime, options, 'defaultCheckOutTime'),
            currency: getControl($metaData.currency, options, 'currency'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

