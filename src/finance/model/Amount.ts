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

export interface Amount {
    grossAmount?: number;

    netAmount?: number;

    vatType?: Amount.VatTypeEnum;

    currency?: string;

}
export namespace Amount {
    export enum VatTypeEnumSet {
        Free = 'Free',
        Reduced = 'Reduced',
        Normal = 'Normal',
        Mixed = 'Mixed'
    }

    export type VatTypeEnum = 'Free' | 'Reduced' | 'Normal' | 'Mixed';

    export const VatTypeEnumValues = Object.freeze(
        ['Free', 'Reduced', 'Normal', 'Mixed'] as VatTypeEnum[]);
}

export type AmountWithRawHttp = Amount & ResponseModel<Amount>;

export namespace Amount {
    export const $metaData = { 
        grossAmount: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        netAmount: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        vatType: Object.freeze({ 
            type: 'string',
            isEnum: true,
            allowedEnumValues: VatTypeEnumValues,
            isPrimitiveType: true,
        } as ApaleoEnumPropertyMetaData<VatTypeEnum>),
        currency: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<Amount>): FormGroup {
        const defaultControls = { 
            grossAmount: getControl($metaData.grossAmount, options, 'grossAmount'),
            netAmount: getControl($metaData.netAmount, options, 'netAmount'),
            vatType: getControl($metaData.vatType, options, 'vatType'),
            currency: getControl($metaData.currency, options, 'currency'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

