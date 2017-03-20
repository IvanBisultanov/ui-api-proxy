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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }               from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                   from '../../types';
import { ResponseModel }                                                    from '../../models';
import { getControl, getControlOptions, adjustDefaultControls }             from '../../functions';

export interface Location {
    street: string;

    postalCode: string;

    city: string;

    countryCode: string;

}

export type LocationWithRawHttp = Location & ResponseModel<Location>;

export namespace Location {
    export const $validators = {
        street: (() => [
            Validators.required,
        ]),
        postalCode: (() => [
            Validators.required,
        ]),
        city: (() => [
            Validators.required,
        ]),
        countryCode: (() => [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2),
        ]),
    };

    export const $controls = { 
        street: ((options?: IControlFactoryOptions<string>) => getControl($validators.street(), options)),
        postalCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.postalCode(), options)),
        city: ((options?: IControlFactoryOptions<string>) => getControl($validators.city(), options)),
        countryCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.countryCode(), options)),
    };

    export const $metaData = { 
        street: { 
            type: 'string',
        } as IApaleoControlMetaData,
        postalCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
        city: { 
            type: 'string',
        } as IApaleoControlMetaData,
        countryCode: { 
            maxLength: 2,
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<Location>) {
        const defaultControls = { 
            street: $controls.street(getControlOptions(options, 'street')),
            postalCode: $controls.postalCode(getControlOptions(options, 'postalCode')),
            city: $controls.city(getControlOptions(options, 'city')),
            countryCode: $controls.countryCode(getControlOptions(options, 'countryCode')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        (<IApaleoAbstractControl><any>group.controls['street']).apaleoMetaData = $metaData.street;
        (<IApaleoAbstractControl><any>group.controls['postalCode']).apaleoMetaData = $metaData.postalCode;
        (<IApaleoAbstractControl><any>group.controls['city']).apaleoMetaData = $metaData.city;
        (<IApaleoAbstractControl><any>group.controls['countryCode']).apaleoMetaData = $metaData.countryCode;

        return group;
    }
}

