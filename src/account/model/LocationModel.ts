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

export interface LocationModel {
    street?: string;

    postalCode?: string;

    city?: string;

    countryCode?: string;

}

export type LocationModelWithRawHttp = LocationModel & ResponseModel<LocationModel>;

export namespace LocationModel {
    export const $metaData = { 
        street: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        postalCode: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        city: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        countryCode: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<LocationModel>): FormGroup {
        const defaultControls = { 
            street: getControl($metaData.street, options, 'street'),
            postalCode: getControl($metaData.postalCode, options, 'postalCode'),
            city: getControl($metaData.city, options, 'city'),
            countryCode: getControl($metaData.countryCode, options, 'countryCode'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

