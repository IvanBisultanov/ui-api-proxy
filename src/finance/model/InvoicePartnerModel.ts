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

export interface InvoicePartnerModel {
    name?: string;

    address?: models.AddressModel;

}

export type InvoicePartnerModelWithRawHttp = InvoicePartnerModel & ResponseModel<InvoicePartnerModel>;

export namespace InvoicePartnerModel {
    export const $metaData = { 
        name: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        address: Object.freeze({ 
            type: 'models.AddressModel',
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<InvoicePartnerModel>): FormGroup {
        const defaultControls = { 
            name: getControl($metaData.name, options, 'name'),
            address: models.AddressModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

