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

import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface ReplacePropertySettingsModel {
    /**
     * The time zone name of the property from the IANA Time Zone Database.  (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
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

export type ReplacePropertySettingsModelWithRawHttp = ReplacePropertySettingsModel & ResponseModel<ReplacePropertySettingsModel>;

export namespace ReplacePropertySettingsModel {
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

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplacePropertySettingsModel>): FormGroup {
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

