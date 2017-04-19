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

/**
 * With this request you can assign a unit to a reservation
 */
import { FormBuilder, FormGroup }                         from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }     from '../../types';
import { ResponseModel }                                  from '../../models';
import { getControl, adjustDefaultControls, setMetaData } from '../../functions.model';

export interface ReservationAssignUnitModel {
    /**
     * ID of the unit
     */
    unitId: string;

}

export type ReservationAssignUnitModelWithRawHttp = ReservationAssignUnitModel & ResponseModel<ReservationAssignUnitModel>;

export namespace ReservationAssignUnitModel {
    export const $metaData = { 
        unitId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReservationAssignUnitModel>): FormGroup {
        const defaultControls = { 
            unitId: getControl($metaData.unitId, options, 'unitId'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        setMetaData(group, $metaData);

        return group;
    }
}

