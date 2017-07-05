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

export interface FolioItemModel {
    /**
     * The id of the folio.
     */
    id: string;

    /**
     * The folio type.
     */
    type?: FolioItemModel.TypeEnum;

    /**
     * The person the folio is assigned to (that is, the one who comsumes and pays for everything).
     */
    debitor: models.FolioDebitorModel;

    /**
     * The reservation linked to this folio.
     */
    reservationId?: string;

    /**
     * The property linked to this folio.
     */
    propertyId: string;

    /**
     * The total balance of the folio.
     */
    balance?: models.MonetaryValueModel;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}
export namespace FolioItemModel {
    export enum TypeEnumSet {
        House = 'House',
        Guest = 'Guest'
    }

    export type TypeEnum = 'House' | 'Guest';

    export const TypeEnumValues = Object.freeze(
        ['House', 'Guest'] as TypeEnum[]);
}

export type FolioItemModelWithRawHttp = FolioItemModel & ResponseModel<FolioItemModel>;

export namespace FolioItemModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        type: Object.freeze({ 
            type: 'string',
            isEnum: true,
            allowedEnumValues: TypeEnumValues,
            isPrimitiveType: true,
        } as ApaleoEnumPropertyMetaData<TypeEnum>),
        debitor: Object.freeze({ 
            isRequired: true,
            type: 'models.FolioDebitorModel',
        } as ApaleoPropertyMetaData),
        reservationId: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        balance: Object.freeze({ 
            type: 'models.MonetaryValueModel',
        } as ApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<FolioItemModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            type: getControl($metaData.type, options, 'type'),
            debitor: models.FolioDebitorModel.$buildForm(fb),
            reservationId: getControl($metaData.reservationId, options, 'reservationId'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
            balance: models.MonetaryValueModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

