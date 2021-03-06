/**
 * Inventory Management
 * Setup and manage the account’s properties and all the units to rent out: rooms, parking lots, beds, meeting rooms, etc.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * With this request you can modify a property
 */
import { FormBuilder, FormGroup }                                               from '@angular/forms';
import { ResponseModel }                                                        from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup }                  from '../../functions.model';
import { BuildFormOptions, ApaleoPropertyMetaData, ApaleoEnumPropertyMetaData } from '../../types';

export interface ReplacePropertyModel {
    /**
     * The name for the property
     */
    name: { [key: string]: string; };

    /**
     * The description for the property
     */
    description?: { [key: string]: string; };

    /**
     * The legal name of the company running the property.
     */
    companyName: string;

    /**
     * The managing director(s) of the company, as they should appear on invoices
     */
    managingDirectors?: string;

    /**
     * The entry in the Commercial Reigster of the company running the property, as it should appear on invoices
     */
    commercialRegisterEntry?: string;

    /**
     * The Tax-ID of the company running the property, as it should appear on invoices
     */
    taxId: string;

    /**
     * Bank account information of the company running the property
     */
    bankAccount?: models.BankAccountModel;

    /**
     * The payment terms used for all rate plans
     */
    paymentTerms: { [key: string]: string; };

}

export type ReplacePropertyModelWithRawHttp = ReplacePropertyModel & ResponseModel<ReplacePropertyModel>;

export namespace ReplacePropertyModel {
    export const $metaData = { 
        name: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
        description: Object.freeze({ 
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
        companyName: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        managingDirectors: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        commercialRegisterEntry: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        taxId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        bankAccount: Object.freeze({ 
            type: 'models.BankAccountModel',
        } as ApaleoPropertyMetaData),
        paymentTerms: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<ReplacePropertyModel>): FormGroup {
        const defaultControls = { 
            companyName: getControl($metaData.companyName, options, 'companyName'),
            managingDirectors: getControl($metaData.managingDirectors, options, 'managingDirectors'),
            commercialRegisterEntry: getControl($metaData.commercialRegisterEntry, options, 'commercialRegisterEntry'),
            taxId: getControl($metaData.taxId, options, 'taxId'),
            bankAccount: models.BankAccountModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

