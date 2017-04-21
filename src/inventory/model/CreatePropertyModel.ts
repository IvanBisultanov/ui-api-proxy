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

import { FormBuilder, FormGroup }                         from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }     from '../../types';
import { ResponseModel }                                  from '../../models';
import { getControl, adjustDefaultControls, setMetaData } from '../../functions.model';

export interface CreatePropertyModel {
    /**
     * The code for the property that can be shown in reports and table views
     */
    code: string;

    /**
     * The name for the property
     */
    name: { [key: string]: string; };

    /**
     * The description for the property
     */
    description: { [key: string]: string; };

    /**
     * The location of the property
     */
    location: models.ReplaceLocationModel;

    /**
     * The time zone
     */
    timeZone: string;

    /**
     * The default check-in time
     */
    defaultCheckInTime: string;

    /**
     * The default check-out time
     */
    defaultCheckOutTime: string;

}

export type CreatePropertyModelWithRawHttp = CreatePropertyModel & ResponseModel<CreatePropertyModel>;

export namespace CreatePropertyModel {
    export const $metaData = { 
        code: Object.freeze({ 
            isRequired: true,
            minLength: 3,
            maxLength: 10,
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
        location: Object.freeze({ 
            isRequired: true,
            type: 'models.ReplaceLocationModel',
        } as IApaleoPropertyMetaData),
        timeZone: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        defaultCheckInTime: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        defaultCheckOutTime: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<CreatePropertyModel>): FormGroup {
        const defaultControls = { 
            code: getControl($metaData.code, options, 'code'),
            location: models.ReplaceLocationModel.$buildForm(fb),
            timeZone: getControl($metaData.timeZone, options, 'timeZone'),
            defaultCheckInTime: getControl($metaData.defaultCheckInTime, options, 'defaultCheckInTime'),
            defaultCheckOutTime: getControl($metaData.defaultCheckOutTime, options, 'defaultCheckOutTime'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

