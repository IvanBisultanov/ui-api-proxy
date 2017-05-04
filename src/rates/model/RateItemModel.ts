/**
 * Apaleo Rates API
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

export interface RateItemModel {
    /**
     * The day of the week
     */
    weekday?: RateItemModel.WeekdayEnum;

    /**
     * The price for the rate
     */
    price?: number;

}
export namespace RateItemModel {
    export enum WeekdayEnum {
        Sunday = <any> 'Sunday',
        Monday = <any> 'Monday',
        Tuesday = <any> 'Tuesday',
        Wednesday = <any> 'Wednesday',
        Thursday = <any> 'Thursday',
        Friday = <any> 'Friday',
        Saturday = <any> 'Saturday'
    }
}

export type RateItemModelWithRawHttp = RateItemModel & ResponseModel<RateItemModel>;

export namespace RateItemModel {
    export const $metaData = { 
        weekday: Object.freeze({ 
            type: 'string',
            isEnum: true,
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        price: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<RateItemModel>): FormGroup {
        const defaultControls = { 
            weekday: getControl($metaData.weekday, options, 'weekday'),
            price: getControl($metaData.price, options, 'price'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

