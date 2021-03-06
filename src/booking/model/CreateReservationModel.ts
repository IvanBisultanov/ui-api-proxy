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

/**
 * With this request you can create a reservation
 */
import { FormBuilder, FormGroup }                                               from '@angular/forms';
import { ResponseModel }                                                        from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup }                  from '../../functions.model';
import { BuildFormOptions, ApaleoPropertyMetaData, ApaleoEnumPropertyMetaData } from '../../types';

export interface CreateReservationModel {
    /**
     * ID of the property
     */
    propertyId: string;

    /**
     * ID of the rateplan
     */
    ratePlanId: string;

    /**
     * ID of the unit type
     */
    unitTypeId: string;

    /**
     * Date of arrival and the optional time with UTC offset
     */
    arrival: string;

    /**
     * Date of departure and the optional time with UTC offset
     */
    departure: string;

    /**
     * Number of adults
     */
    adults?: number;

    /**
     * Number of children
     */
    children?: number;

    /**
     * Code of the guest title
     */
    guestTitle: string;

    /**
     * First name of the guest
     */
    firstName: string;

    /**
     * Middle initial of the guest
     */
    middleInitial?: string;

    /**
     * Last name of the guest
     */
    lastName: string;

    /**
     * Email address number of the guest
     */
    email: string;

    /**
     * Phone number of the guest
     */
    phone?: string;

    /**
     * Address of the guest
     */
    address: models.ReplaceAddressModel;

}

export type CreateReservationModelWithRawHttp = CreateReservationModel & ResponseModel<CreateReservationModel>;

export namespace CreateReservationModel {
    export const $metaData = { 
        propertyId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        ratePlanId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        unitTypeId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        arrival: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        departure: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        adults: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        children: Object.freeze({ 
            type: 'number',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        guestTitle: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        firstName: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 25,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        middleInitial: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        lastName: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 40,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        email: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        phone: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as ApaleoPropertyMetaData),
        address: Object.freeze({ 
            isRequired: true,
            type: 'models.ReplaceAddressModel',
        } as ApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: BuildFormOptions<CreateReservationModel>): FormGroup {
        const defaultControls = { 
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
            ratePlanId: getControl($metaData.ratePlanId, options, 'ratePlanId'),
            unitTypeId: getControl($metaData.unitTypeId, options, 'unitTypeId'),
            arrival: getControl($metaData.arrival, options, 'arrival'),
            departure: getControl($metaData.departure, options, 'departure'),
            adults: getControl($metaData.adults, options, 'adults'),
            children: getControl($metaData.children, options, 'children'),
            guestTitle: getControl($metaData.guestTitle, options, 'guestTitle'),
            firstName: getControl($metaData.firstName, options, 'firstName'),
            middleInitial: getControl($metaData.middleInitial, options, 'middleInitial'),
            lastName: getControl($metaData.lastName, options, 'lastName'),
            email: getControl($metaData.email, options, 'email'),
            phone: getControl($metaData.phone, options, 'phone'),
            address: models.ReplaceAddressModel.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

