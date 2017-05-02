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
 * With this request you can modify an account
 */
import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface ReplaceAccountModel {
    /**
     * The name for the account, which usually should be the company name
     */
    name: string;

    /**
     * The description for the account
     */
    description: string;

    /**
     * The URL of the account logo
     */
    logoUrl?: string;

    /**
     * The location of the account
     */
    location: models.ReplaceLocationModel;

}

export type ReplaceAccountModelWithRawHttp = ReplaceAccountModel & ResponseModel<ReplaceAccountModel>;

export namespace ReplaceAccountModel {
    export const $metaData = { 
        name: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 40,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        description: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        logoUrl: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        location: Object.freeze({ 
            isRequired: true,
            type: 'models.ReplaceLocationModel',
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplaceAccountModel>): FormGroup {
        const defaultControls = { 
            name: getControl($metaData.name, options, 'name'),
            description: getControl($metaData.description, options, 'description'),
            logoUrl: getControl($metaData.logoUrl, options, 'logoUrl'),
            location: models.ReplaceLocationModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

