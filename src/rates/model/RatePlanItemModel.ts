/**
 * Apaleo Rates API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface RatePlanItemModel {
    /**
     * The rateplan id
     */
    id?: string;

    /**
     * The code for the rateplan that can be shown in reports and table views
     */
    code?: string;

    /**
     * The name for the rateplan
     */
    name?: string;

    /**
     * The description for the rateplan
     */
    description?: string;

    /**
     * The way the defined rates are applied when an offer is calculated for this rate plan
     */
    sellingUnit?: RatePlanItemModel.SellingUnitEnum;

    /**
     * The default price for the rateplan
     */
    defaultPrice?: number;

    /**
     * The id of the property to which the rateplan belongs to
     */
    propertyId?: string;

    /**
     * The unit types ids linked to the rateplan
     */
    unitTypeIds?: Array<string>;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}
export namespace RatePlanItemModel {
    export enum SellingUnitEnum {
        Night = <any> 'Night',
        Day = <any> 'Day'
    }
}

export type RatePlanItemModelWithRawHttp = RatePlanItemModel & ResponseModel<RatePlanItemModel>;

export namespace RatePlanItemModel {
    export const $metaData = { 
        id: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        code: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        name: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        description: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        sellingUnit: Object.freeze({ 
            type: 'string',
            isEnum: true,
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        defaultPrice: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        unitTypeIds: Object.freeze({ 
            type: 'Array<string>',
            isPrimitiveType: true,
            isListContainer: true,
        } as IApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<RatePlanItemModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            code: getControl($metaData.code, options, 'code'),
            name: getControl($metaData.name, options, 'name'),
            description: getControl($metaData.description, options, 'description'),
            sellingUnit: getControl($metaData.sellingUnit, options, 'sellingUnit'),
            defaultPrice: getControl($metaData.defaultPrice, options, 'defaultPrice'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

