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
import { FormBuilder, FormGroup }                         from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }     from '../../types';
import { ResponseModel }                                  from '../../models';
import { getControl, adjustDefaultControls, setMetaData } from '../../functions.model';

export interface LanguagesModel {
    /**
     * The languages for the account
     */
    languages?: Array<models.LanguageModel>;

}

export type LanguagesModelWithRawHttp = LanguagesModel & ResponseModel<LanguagesModel>;

export namespace LanguagesModel {
    export const $metaData = { 
        languages: Object.freeze({ 
            type: 'Array<models.LanguageModel>',
            isListContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<LanguagesModel>): FormGroup {
        const defaultControls = { 
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

