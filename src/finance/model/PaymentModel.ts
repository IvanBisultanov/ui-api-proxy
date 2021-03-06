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

export interface PaymentModel {
    /**
     * Id of the payment. This is unique within one folio.
     */
    id: string;

    /**
     * The Payment Method.
     */
    method: PaymentModel.MethodEnum;

    /**
     * The amount of the payment.
     */
    amount: models.MonetaryValueModel;

    /**
     * A reference number to the payment's represenation in other systems (bank statement, or similar).
     */
    reference?: string;

    /**
     * The date when the payment was done
     */
    paymentDate?: Date;

}
export namespace PaymentModel {
    export enum MethodEnumSet {
        Cash = 'Cash',
        BankTransfer = 'BankTransfer',
        Invoice = 'Invoice'
    }

    export type MethodEnum = 'Cash' | 'BankTransfer' | 'Invoice';

    export const MethodEnumValues = Object.freeze(
        ['Cash', 'BankTransfer', 'Invoice'] as MethodEnum[]);
}

export type PaymentModelWithRawHttp = PaymentModel & ResponseModel<PaymentModel>;

export namespace PaymentModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
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

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<PaymentModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
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

