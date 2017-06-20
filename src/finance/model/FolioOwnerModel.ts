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

export interface FolioOwnerModel {
    /**
     * The guest title
     */
    title?: string;

    /**
     * First name of the guest
     */
    firstName?: string;

    /**
     * Middle initial of the guest
     */
    middleInitial?: string;

    /**
     * Last name of the guest
     */
    lastName: string;

    /**
     * Email address number of the guest
     */
    email?: string;

    /**
     * Phone number of the guest
     */
    phone?: string;

    /**
     * Street of the guest
     */
    street?: string;

    /**
     * Street number of the guest
     */
    number?: string;

    /**
     * City of the guest
     */
    city?: string;

    /**
     * Postal code of the guest
     */
    postalCode?: string;

    /**
     * Country code of the guest
     */
    countryCode?: string;

}

export type FolioOwnerModelWithRawHttp = FolioOwnerModel & ResponseModel<FolioOwnerModel>;

export namespace FolioOwnerModel {
    export const $metaData = { 
        title: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        firstName: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        middleInitial: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        lastName: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        email: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        phone: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        street: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        number: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        city: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        postalCode: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        countryCode: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<FolioOwnerModel>): FormGroup {
        const defaultControls = { 
            title: getControl($metaData.title, options, 'title'),
            firstName: getControl($metaData.firstName, options, 'firstName'),
            middleInitial: getControl($metaData.middleInitial, options, 'middleInitial'),
            lastName: getControl($metaData.lastName, options, 'lastName'),
            email: getControl($metaData.email, options, 'email'),
            phone: getControl($metaData.phone, options, 'phone'),
            street: getControl($metaData.street, options, 'street'),
            number: getControl($metaData.number, options, 'number'),
            city: getControl($metaData.city, options, 'city'),
            postalCode: getControl($metaData.postalCode, options, 'postalCode'),
            countryCode: getControl($metaData.countryCode, options, 'countryCode'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}
