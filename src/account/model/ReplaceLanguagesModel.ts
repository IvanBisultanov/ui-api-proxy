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

/**
 * With this request you can modify the language settings for the account
 */
import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface ReplaceLanguagesModel {
    /**
     * The languages for the account
     */
    languages: Array<models.ReplaceLanguageModel>;

}

export type ReplaceLanguagesModelWithRawHttp = ReplaceLanguagesModel & ResponseModel<ReplaceLanguagesModel>;

export namespace ReplaceLanguagesModel {
    export const $metaData = { 
        languages: Object.freeze({ 
            isRequired: true,
            type: 'Array<models.ReplaceLanguageModel>',
            isListContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplaceLanguagesModel>): FormGroup {
        const defaultControls = { 
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

