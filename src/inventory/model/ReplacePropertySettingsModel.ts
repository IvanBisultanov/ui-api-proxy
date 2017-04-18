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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl }  from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }                from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                    from '../../types';
import { ResponseModel }                                                     from '../../models';
import { getControl, getControlOptions, adjustDefaultControls, setMetaData } from '../../functions';

export interface ReplacePropertySettingsModel {
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
    export const $validators = {
        defaultCheckInTime: (() => [
            Validators.required,
        ]),
        defaultCheckOutTime: (() => [
            Validators.required,
        ]),
    };

    export const $controls = { 
        defaultCheckInTime: ((options?: IControlFactoryOptions<string>) => getControl($validators.defaultCheckInTime(), options)),
        defaultCheckOutTime: ((options?: IControlFactoryOptions<string>) => getControl($validators.defaultCheckOutTime(), options)),
    };

    export const $metaData = { 
        defaultCheckInTime: { 
            type: 'string',
        } as IApaleoControlMetaData,
        defaultCheckOutTime: { 
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplacePropertySettingsModel>) {
        const defaultControls = { 
            defaultCheckInTime: $controls.defaultCheckInTime(getControlOptions(options, 'defaultCheckInTime')),
            defaultCheckOutTime: $controls.defaultCheckOutTime(getControlOptions(options, 'defaultCheckOutTime')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.defaultCheckInTime, $metaData.defaultCheckInTime);
        setMetaData(<any>group.controls.defaultCheckOutTime, $metaData.defaultCheckOutTime);

        return group;
    }
}

