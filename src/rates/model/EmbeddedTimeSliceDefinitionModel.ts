/**
 * Rates Management
 * Manage the rate plans and rates to rent out your inventory at the best price.
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

export interface EmbeddedTimeSliceDefinitionModel {
    /**
     * The time slice definition id
     */
    id: string;

    /**
     * The name for the time slice definition
     */
    name?: string;

    /**
     * The template used by the time slice defintion
     */
    template?: EmbeddedTimeSliceDefinitionModel.TemplateEnum;

    /**
     * The check-in time for reservations based on this rate plan
     */
    checkInTime?: string;

    /**
     * The check-out time for reservations based on this rate plan
     */
    checkOutTime?: string;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}
export namespace EmbeddedTimeSliceDefinitionModel {
    export enum TemplateEnumSet {
        DayUse = 'DayUse',
        OverNight = 'OverNight'
    }

    export type TemplateEnum = 'DayUse' | 'OverNight';

    export const TemplateEnumValues = Object.freeze(
        ['DayUse', 'OverNight'] as TemplateEnum[]);
}

export type EmbeddedTimeSliceDefinitionModelWithRawHttp = EmbeddedTimeSliceDefinitionModel & ResponseModel<EmbeddedTimeSliceDefinitionModel>;

export namespace EmbeddedTimeSliceDefinitionModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        name: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        template: Object.freeze({ 
            type: 'string',
            isEnum: true,
            allowedEnumValues: TemplateEnumValues,
            isPrimitiveType: true,
        } as ApaleoEnumPropertyMetaData<TemplateEnum>),
        checkInTime: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        checkOutTime: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<EmbeddedTimeSliceDefinitionModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            name: getControl($metaData.name, options, 'name'),
            template: getControl($metaData.template, options, 'template'),
            checkInTime: getControl($metaData.checkInTime, options, 'checkInTime'),
            checkOutTime: getControl($metaData.checkOutTime, options, 'checkOutTime'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

