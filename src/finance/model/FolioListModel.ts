/**
 * Apaleo Finance API
 * Everything around the Folio, Invoices and Accounting.
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

export interface FolioListModel {
    /**
     * List of folios.
     */
    folios: Array<models.FolioItemModel>;

    /**
     * Total count of items
     */
    count: number;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type FolioListModelWithRawHttp = FolioListModel & ResponseModel<FolioListModel>;

export namespace FolioListModel {
    export const $metaData = { 
        folios: Object.freeze({ 
            isRequired: true,
            type: 'Array<models.FolioItemModel>',
            isListContainer: true,
        } as ApaleoPropertyMetaData),
        count: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<FolioListModel>): FormGroup {
        const defaultControls = { 
            count: getControl($metaData.count, options, 'count'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

