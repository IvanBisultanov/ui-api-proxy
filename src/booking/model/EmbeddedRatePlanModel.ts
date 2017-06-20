/**
 * Booking
 * Resources and methods to manage guest journeys.
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

export interface EmbeddedRatePlanModel {
    /**
     * The rateplan id
     */
    id: string;

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
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type EmbeddedRatePlanModelWithRawHttp = EmbeddedRatePlanModel & ResponseModel<EmbeddedRatePlanModel>;

export namespace EmbeddedRatePlanModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        code: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        name: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        description: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<EmbeddedRatePlanModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            code: getControl($metaData.code, options, 'code'),
            name: getControl($metaData.name, options, 'name'),
            description: getControl($metaData.description, options, 'description'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}
