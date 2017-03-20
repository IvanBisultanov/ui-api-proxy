/**
 * Apaleo Account API
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

export interface LanguageModel {
    code: string;

    default: boolean;

    mandatory: boolean;

}

export type LanguageModelWithRawHttp = LanguageModel & ResponseModel<LanguageModel>;

export namespace LanguageModel {
    export const $validators = {
        code: (() => [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2),
        ]),
        default: (() => [
            Validators.required,
        ]),
        mandatory: (() => [
            Validators.required,
        ]),
    };

    export const $controls = { 
        code: ((options?: IControlFactoryOptions<string>) => getControl($validators.code(), options)),
        default: ((options?: IControlFactoryOptions<boolean>) => getControl($validators.default(), options)),
        mandatory: ((options?: IControlFactoryOptions<boolean>) => getControl($validators.mandatory(), options)),
    };

    export const $metaData = { 
        code: { 
            maxLength: 2,
            type: 'string',
        } as IApaleoControlMetaData,
        default: { 
            type: 'boolean',
        } as IApaleoControlMetaData,
        mandatory: { 
            type: 'boolean',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<LanguageModel>) {
        const defaultControls = { 
            code: $controls.code(getControlOptions(options, 'code')),
            default: $controls.default(getControlOptions(options, 'default')),
            mandatory: $controls.mandatory(getControlOptions(options, 'mandatory')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.code, $metaData.code);
        setMetaData(<any>group.controls.default, $metaData.default);
        setMetaData(<any>group.controls.mandatory, $metaData.mandatory);

        return group;
    }
}

