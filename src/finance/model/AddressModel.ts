/**
 * Apaleo Finance API
 * Everything around the Folio, Invoices and Accounting.
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

export interface AddressModel {
    addressline1: string;

    addressline2?: string;

    postalCode: string;

    city: string;

    countryCode: string;

}

export type AddressModelWithRawHttp = AddressModel & ResponseModel<AddressModel>;

export namespace AddressModel {
    export const $metaData = { 
        addressline1: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        addressline2: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        postalCode: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        city: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        countryCode: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<AddressModel>): FormGroup {
        const defaultControls = { 
            addressline1: getControl($metaData.addressline1, options, 'addressline1'),
            addressline2: getControl($metaData.addressline2, options, 'addressline2'),
            postalCode: getControl($metaData.postalCode, options, 'postalCode'),
            city: getControl($metaData.city, options, 'city'),
            countryCode: getControl($metaData.countryCode, options, 'countryCode'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}
