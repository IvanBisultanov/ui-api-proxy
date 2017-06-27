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
     * The Payment Method. Right now, only cash, invoice and bank transfer are supported.
     */
    method: CreatePaymentModel.MethodEnum;

    /**
     * The amount of the payment.
     */
    amount: models.PaymentAmountModel;

    /**
     * A reference number to the payment's represenation in other systems (bank statement, or similar).
     */
    referenceNumber?: string;

    /**
     * A freetext field to store informational data related to this payment.
     */
    comment?: string;

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
            type: 'models.PaymentAmountModel',
        } as ApaleoPropertyMetaData),
        referenceNumber: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        comment: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<CreatePaymentModel>): FormGroup {
        const defaultControls = { 
            method: getControl($metaData.method, options, 'method'),
            amount: models.PaymentAmountModel.$buildForm(fb),
            referenceNumber: getControl($metaData.referenceNumber, options, 'referenceNumber'),
            comment: getControl($metaData.comment, options, 'comment'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}
