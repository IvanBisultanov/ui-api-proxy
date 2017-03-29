/**
 * Apaleo Inventory API
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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl }  from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }                from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                    from '../../types';
import { ResponseModel }                                                     from '../../models';
import { getControl, getControlOptions, adjustDefaultControls, setMetaData } from '../../functions';

export interface UnitTypeItemModel {
    /**
     * The unit type id
     */
    id?: string;

    /**
     * The code for the unit type that can be shown in reports and table views
     */
    code?: string;

    /**
     * The name for the unit type
     */
    name?: { [key: string]: string; };

    /**
     * The description for the unit type
     */
    description?: { [key: string]: string; };

    /**
     * Minimum number of persons for the unit type
     */
    minPersons?: number;

    /**
     * Maximum number of persons for the unit type
     */
    maxPersons?: number;

    /**
     * The property to which the unit type belongs to
     */
    propertyCode?: string;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type UnitTypeItemModelWithRawHttp = UnitTypeItemModel & ResponseModel<UnitTypeItemModel>;

export namespace UnitTypeItemModel {
    export const $validators = {
        id: (() => [
        ]),
        code: (() => [
        ]),
        name: (() => [
        ]),
        description: (() => [
        ]),
        minPersons: (() => [
        ]),
        maxPersons: (() => [
        ]),
        propertyCode: (() => [
        ]),
        links: (() => [
        ]),
    };

    export const $controls = { 
        id: ((options?: IControlFactoryOptions<string>) => getControl($validators.id(), options)),
        code: ((options?: IControlFactoryOptions<string>) => getControl($validators.code(), options)),
        minPersons: ((options?: IControlFactoryOptions<number>) => getControl($validators.minPersons(), options)),
        maxPersons: ((options?: IControlFactoryOptions<number>) => getControl($validators.maxPersons(), options)),
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
        minPersons: { 
            type: 'number',
        } as IApaleoControlMetaData,
        maxPersons: { 
            type: 'number',
        } as IApaleoControlMetaData,
        propertyCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<UnitTypeItemModel>) {
        const defaultControls = { 
            id: $controls.id(getControlOptions(options, 'id')),
            code: $controls.code(getControlOptions(options, 'code')),
            minPersons: $controls.minPersons(getControlOptions(options, 'minPersons')),
            maxPersons: $controls.maxPersons(getControlOptions(options, 'maxPersons')),
            propertyCode: $controls.propertyCode(getControlOptions(options, 'propertyCode')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.id, $metaData.id);
        setMetaData(<any>group.controls.code, $metaData.code);
        setMetaData(<any>group.controls.minPersons, $metaData.minPersons);
        setMetaData(<any>group.controls.maxPersons, $metaData.maxPersons);
        setMetaData(<any>group.controls.propertyCode, $metaData.propertyCode);

        return group;
    }
}
