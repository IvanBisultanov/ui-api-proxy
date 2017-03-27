/**
 * Apaleo Bookings API
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

export interface EmbeddedPropertyModel {
    /**
     * The property id
     */
    id?: models.UppercaseString;

    /**
     * The code for the property that can be shown in reports and table views
     */
    code?: models.UppercaseString;

    /**
     * The name for the property
     */
    name?: string;

    /**
     * The description for the property
     */
    description?: string;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type EmbeddedPropertyModelWithRawHttp = EmbeddedPropertyModel & ResponseModel<EmbeddedPropertyModel>;

export namespace EmbeddedPropertyModel {
    export const $validators = {
        id: (() => [
        ]),
        code: (() => [
        ]),
        name: (() => [
        ]),
        description: (() => [
        ]),
        links: (() => [
        ]),
    };

    export const $controls = { 
        name: ((options?: IControlFactoryOptions<string>) => getControl($validators.name(), options)),
        description: ((options?: IControlFactoryOptions<string>) => getControl($validators.description(), options)),
    };

    export const $metaData = { 
        name: { 
            type: 'string',
        } as IApaleoControlMetaData,
        description: { 
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<EmbeddedPropertyModel>) {
        const defaultControls = { 
            id: models.UppercaseString.$buildForm(fb),
            code: models.UppercaseString.$buildForm(fb),
            name: $controls.name(getControlOptions(options, 'name')),
            description: $controls.description(getControlOptions(options, 'description')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.name, $metaData.name);
        setMetaData(<any>group.controls.description, $metaData.description);

        return group;
    }
}

