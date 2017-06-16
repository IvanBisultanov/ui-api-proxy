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

export interface ReplaceLanguageModel {
    code: string;

    default?: boolean;

    mandatory?: boolean;

}

export type ReplaceLanguageModelWithRawHttp = ReplaceLanguageModel & ResponseModel<ReplaceLanguageModel>;

export namespace ReplaceLanguageModel {
    export const $metaData = { 
        code: Object.freeze({ 
            isRequired: true,
            minLength: 2,
            maxLength: 2,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        default: Object.freeze({ 
            type: 'boolean',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        mandatory: Object.freeze({ 
            type: 'boolean',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<ReplaceLanguageModel>): FormGroup {
        const defaultControls = { 
            code: getControl($metaData.code, options, 'code'),
            default: getControl($metaData.default, options, 'default'),
            mandatory: getControl($metaData.mandatory, options, 'mandatory'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

