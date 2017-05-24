/**
 * Inventory Management
 * Set up hotels, rooms, room categories and other units in the portfolio.
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

export interface PropertyListModel {
    /**
     * List of properties
     */
    properties: Array<models.PropertyItemModel>;

    /**
     * Total count of items
     */
    count: number;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type PropertyListModelWithRawHttp = PropertyListModel & ResponseModel<PropertyListModel>;

export namespace PropertyListModel {
    export const $metaData = { 
        properties: Object.freeze({ 
            isRequired: true,
            type: 'Array<models.PropertyItemModel>',
            isListContainer: true,
        } as IApaleoPropertyMetaData),
        count: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<PropertyListModel>): FormGroup {
        const defaultControls = { 
            count: getControl($metaData.count, options, 'count'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

