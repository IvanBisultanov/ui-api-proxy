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

export interface FinanceAccountModel {
    /**
     * The account number. Unique identifier within one property.
     */
    number: string;

    /**
     * The name of the account.
     */
    name: string;

    /**
     * The type of account.
     */
    type: FinanceAccountModel.TypeEnum;

    parentNumber?: string;

    propertyId?: string;

    hasChildren?: boolean;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}
export namespace FinanceAccountModel {
    export enum TypeEnumSet {
        Revenues = 'Revenues',
        Payments = 'Payments',
        Liabilities = 'Liabilities',
        Receivables = 'Receivables'
    }

    export type TypeEnum = 'Revenues' | 'Payments' | 'Liabilities' | 'Receivables';

    export const TypeEnumValues = Object.freeze(
        ['Revenues', 'Payments', 'Liabilities', 'Receivables'] as TypeEnum[]);
}

export type FinanceAccountModelWithRawHttp = FinanceAccountModel & ResponseModel<FinanceAccountModel>;

export namespace FinanceAccountModel {
    export const $metaData = { 
        number: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        name: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        type: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isEnum: true,
            allowedEnumValues: TypeEnumValues,
            isPrimitiveType: true,
        } as ApaleoEnumPropertyMetaData<TypeEnum>),
        parentNumber: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        hasChildren: Object.freeze({ 
            type: 'boolean',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<FinanceAccountModel>): FormGroup {
        const defaultControls = { 
            number: getControl($metaData.number, options, 'number'),
            name: getControl($metaData.name, options, 'name'),
            type: getControl($metaData.type, options, 'type'),
            parentNumber: getControl($metaData.parentNumber, options, 'parentNumber'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
            hasChildren: getControl($metaData.hasChildren, options, 'hasChildren'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

