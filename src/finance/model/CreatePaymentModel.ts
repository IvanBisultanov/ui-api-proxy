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

export interface CreatePaymentModel {
    /**
     * The payment method.
     */
    method: CreatePaymentModel.MethodEnum;

    /**
     * The amount of the payment.
     */
    amount: models.MonetaryValueModel;

    /**
     * A reference to the payment's representation in other systems (masked CC, or similar).
     */
    reference?: string;

    /**
     * The date and time (with UTC offset), when the payment was done. Defaults to the current date and time, if not set.
     */
    paymentDate?: Date;

}
export namespace CreatePaymentModel {
    export enum MethodEnumSet {
        Cash = 'Cash',
        BankTransfer = 'BankTransfer',
        Invoice = 'Invoice'
    }

    export type MethodEnum = 'Cash' | 'BankTransfer' | 'Invoice';

    export const MethodEnumValues = Object.freeze(
        ['Cash', 'BankTransfer', 'Invoice'] as MethodEnum[]);
}

export type CreatePaymentModelWithRawHttp = CreatePaymentModel & ResponseModel<CreatePaymentModel>;

export namespace CreatePaymentModel {
    export const $metaData = { 
        method: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isEnum: true,
            allowedEnumValues: MethodEnumValues,
            isPrimitiveType: true,
        } as ApaleoEnumPropertyMetaData<MethodEnum>),
        amount: Object.freeze({ 
            isRequired: true,
            type: 'models.MonetaryValueModel',
        } as ApaleoPropertyMetaData),
        reference: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        paymentDate: Object.freeze({ 
            type: 'Date',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<CreatePaymentModel>): FormGroup {
        const defaultControls = { 
            method: getControl($metaData.method, options, 'method'),
            amount: models.MonetaryValueModel.$buildForm(fb),
            reference: getControl($metaData.reference, options, 'reference'),
            paymentDate: getControl($metaData.paymentDate, options, 'paymentDate'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

