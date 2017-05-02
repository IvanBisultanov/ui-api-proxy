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

import { FormBuilder, FormGroup }                         from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }     from '../../types';
import { ResponseModel }                                  from '../../models';
import { getControl, adjustDefaultControls, setMetaData } from '../../functions.model';

export interface DateTimeModel {
    /**
     * The date in the format yyyy-MM-dd
     */
    date: Date;

    /**
     * The time in the format HH:mm
     */
    time?: string;

}

export type DateTimeModelWithRawHttp = DateTimeModel & ResponseModel<DateTimeModel>;

export namespace DateTimeModel {
    export const $metaData = { 
        date: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        time: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<DateTimeModel>): FormGroup {
        const defaultControls = { 
            date: getControl($metaData.date, options, 'date'),
            time: getControl($metaData.time, options, 'time'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

