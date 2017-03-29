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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl }  from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }                from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                    from '../../types';
import { ResponseModel }                                                     from '../../models';
import { getControl, getControlOptions, adjustDefaultControls, setMetaData } from '../../functions';

export interface CreateRateplanModel {
    /**
     * The code for the rateplan that can be shown in reports and table views
     */
    code: string;

    /**
     * The code of the property where rateplan will be created
     */
    propertyCode: string;

    /**
     * The name for the rateplan
     */
    name: { [key: string]: string; };

    /**
     * The description for the rateplan
     */
    description: { [key: string]: string; };

    /**
     * The default price for the rateplan
     */
    defaultPrice: number;

    /**
     * The unit types ids to link to the rateplan
     */
    unitTypeIds: Array<string>;

}

export type CreateRateplanModelWithRawHttp = CreateRateplanModel & ResponseModel<CreateRateplanModel>;

export namespace CreateRateplanModel {
    export const $validators = {
        code: (() => [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
        ]),
        propertyCode: (() => [
            Validators.required,
        ]),
        name: (() => [
            Validators.required,
        ]),
        description: (() => [
            Validators.required,
        ]),
        defaultPrice: (() => [
            Validators.required,
        ]),
        unitTypeIds: (() => [
            Validators.required,
        ]),
    };

    export const $controls = { 
        code: ((options?: IControlFactoryOptions<string>) => getControl($validators.code(), options)),
        propertyCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.propertyCode(), options)),
        defaultPrice: ((options?: IControlFactoryOptions<number>) => getControl($validators.defaultPrice(), options)),
    };

    export const $metaData = { 
        code: { 
            maxLength: 10,
            type: 'string',
        } as IApaleoControlMetaData,
        propertyCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
        name: { 
            type: '{ [key: string]: string; }',
        } as IApaleoControlMetaData,
        description: { 
            type: '{ [key: string]: string; }',
        } as IApaleoControlMetaData,
        defaultPrice: { 
            type: 'number',
        } as IApaleoControlMetaData,
        unitTypeIds: { 
            type: 'Array&lt;string&gt;',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<CreateRateplanModel>) {
        const defaultControls = { 
            code: $controls.code(getControlOptions(options, 'code')),
            propertyCode: $controls.propertyCode(getControlOptions(options, 'propertyCode')),
            defaultPrice: $controls.defaultPrice(getControlOptions(options, 'defaultPrice')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.code, $metaData.code);
        setMetaData(<any>group.controls.propertyCode, $metaData.propertyCode);
        setMetaData(<any>group.controls.defaultPrice, $metaData.defaultPrice);

        return group;
    }
}

