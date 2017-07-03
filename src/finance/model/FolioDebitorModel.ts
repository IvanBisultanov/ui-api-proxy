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

export interface FolioDebitorModel {
    /**
     * Title
     */
    title?: string;

    /**
     * First name
     */
    firstName?: string;

    /**
     * Middle initial
     */
    middleInitial?: string;

    /**
     * Last name
     */
    name: string;

    /**
     * Email address
     */
    email?: string;

    /**
     * Phone number
     */
    phone?: string;

    /**
     * Address
     */
    address?: models.AddressModel;

}

export type FolioDebitorModelWithRawHttp = FolioDebitorModel & ResponseModel<FolioDebitorModel>;

export namespace FolioDebitorModel {
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
        name: Object.freeze({ 
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
        address: Object.freeze({ 
            type: 'models.AddressModel',
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<FolioDebitorModel>): FormGroup {
        const defaultControls = { 
            title: getControl($metaData.title, options, 'title'),
            firstName: getControl($metaData.firstName, options, 'firstName'),
            middleInitial: getControl($metaData.middleInitial, options, 'middleInitial'),
            name: getControl($metaData.name, options, 'name'),
            email: getControl($metaData.email, options, 'email'),
            phone: getControl($metaData.phone, options, 'phone'),
            address: models.AddressModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}
