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

export interface MessageItemCollection {
    messages?: Array<string>;

}

export type MessageItemCollectionWithRawHttp = MessageItemCollection & ResponseModel<MessageItemCollection>;

export namespace MessageItemCollection {
    export const $metaData = { 
        messages: Object.freeze({ 
            type: 'Array<string>',
            isPrimitiveType: true,
            isListContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<MessageItemCollection>): FormGroup {
        const defaultControls = { 
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

