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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }               from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                   from '../../types';
import { ResponseModel }                                                    from '../../models';
import { getControl, getControlOptions, adjustDefaultControls }             from '../../functions';

export interface RateplanItemModel {
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
    name?: { [key: string]: string; };

    /**
     * The description for the rateplan
     */
    description?: { [key: string]: string; };

    /**
     * The default price for the rateplan
     */
    defaultPrice?: number;

    /**
     * The code of the property to which the rateplan belongs to
     */
    propertyCode?: string;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type RateplanItemModelWithRawHttp = RateplanItemModel & ResponseModel<RateplanItemModel>;

export namespace RateplanItemModel {
    export const $validators = {
        id: (() => [
        ]),
        code: (() => [
        ]),
        name: (() => [
        ]),
        description: (() => [
        ]),
        defaultPrice: (() => [
        ]),
        propertyCode: (() => [
        ]),
        links: (() => [
        ]),
    };

    export const $controls = { 
        id: ((options?: IControlFactoryOptions<string>) => getControl($validators.id(), options)),
        code: ((options?: IControlFactoryOptions<string>) => getControl($validators.code(), options)),
        defaultPrice: ((options?: IControlFactoryOptions<number>) => getControl($validators.defaultPrice(), options)),
        propertyCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.propertyCode(), options)),
    };

    export const $metaData = { 
        id: { 
            type: 'string',
        } as IApaleoControlMetaData,
        code: { 
            type: 'string',
        } as IApaleoControlMetaData,
        name: { 
            type: '{ [key: string]: string; }',
        } as IApaleoControlMetaData,
        description: { 
            type: '{ [key: string]: string; }',
        } as IApaleoControlMetaData,
        defaultPrice: { 
            type: 'number',
        } as IApaleoControlMetaData,
        propertyCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<RateplanItemModel>) {
        const defaultControls = { 
            id: $controls.id(getControlOptions(options, 'id')),
            code: $controls.code(getControlOptions(options, 'code')),
            defaultPrice: $controls.defaultPrice(getControlOptions(options, 'defaultPrice')),
            propertyCode: $controls.propertyCode(getControlOptions(options, 'propertyCode')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        (<IApaleoAbstractControl><any>group.controls['id']).apaleoMetaData = $metaData.id;
        (<IApaleoAbstractControl><any>group.controls['code']).apaleoMetaData = $metaData.code;
        (<IApaleoAbstractControl><any>group.controls['defaultPrice']).apaleoMetaData = $metaData.defaultPrice;
        (<IApaleoAbstractControl><any>group.controls['propertyCode']).apaleoMetaData = $metaData.propertyCode;

        return group;
    }
}

