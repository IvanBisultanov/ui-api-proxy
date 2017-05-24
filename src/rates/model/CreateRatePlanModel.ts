/**
 * Rates Management
 * Manage rates and rateplans for all properties.
 *
 * OpenAPI spec version: 1.0.0
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

export interface CreateRatePlanModel {
    /**
     * The code for the rateplan that can be shown in reports and table views
     */
    code: string;

    /**
     * The id of the property where the rateplan will be created
     */
    propertyId: string;

    /**
     * The name for the rateplan
     */
    name: { [key: string]: string; };

    /**
     * The description for the rateplan
     */
    description: { [key: string]: string; };

    /**
     * Select the way the defined rates are applied when an offer is calculated for this rate plan
     */
    sellingUnit: CreateRatePlanModel.SellingUnitEnum;

    /**
     * The default price for the rateplan
     */
    defaultPrice?: number;

    /**
     * The unit types ids to link to the rateplan
     */
    unitTypeIds?: Array<string>;

}
export namespace CreateRatePlanModel {
    export enum SellingUnitEnum {
        Night = <any> 'Night',
        Day = <any> 'Day'
    }
}

export type CreateRatePlanModelWithRawHttp = CreateRatePlanModel & ResponseModel<CreateRatePlanModel>;

export namespace CreateRatePlanModel {
    export const $metaData = { 
        code: Object.freeze({ 
            isRequired: true,
            minLength: 3,
            maxLength: 10,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        name: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
        description: Object.freeze({ 
            isRequired: true,
            type: '{ [key: string]: string; }',
            isPrimitiveType: true,
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
        sellingUnit: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isEnum: true,
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        defaultPrice: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        unitTypeIds: Object.freeze({ 
            type: 'Array<string>',
            isPrimitiveType: true,
            isListContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<CreateRatePlanModel>): FormGroup {
        const defaultControls = { 
            code: getControl($metaData.code, options, 'code'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
            sellingUnit: getControl($metaData.sellingUnit, options, 'sellingUnit'),
            defaultPrice: getControl($metaData.defaultPrice, options, 'defaultPrice'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

