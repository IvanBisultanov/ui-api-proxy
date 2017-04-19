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

import { FormBuilder, FormGroup }                         from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }     from '../../types';
import { ResponseModel }                                  from '../../models';
import { getControl, adjustDefaultControls, setMetaData } from '../../functions.model';

export interface ReplaceLanguageModel {
    code: string;

    default: boolean;

    mandatory: boolean;

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
        } as IApaleoPropertyMetaData),
        default: Object.freeze({ 
            isRequired: true,
            type: 'boolean',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        mandatory: Object.freeze({ 
            isRequired: true,
            type: 'boolean',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplaceLanguageModel>): FormGroup {
        const defaultControls = { 
            code: getControl($metaData.code, options, 'code'),
            default: getControl($metaData.default, options, 'default'),
            mandatory: getControl($metaData.mandatory, options, 'mandatory'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

