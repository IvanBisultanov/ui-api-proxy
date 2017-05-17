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
 * With this request you can modify a reservation
 */
import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface ReplaceReservationModel {
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
     * Email address  of the guest
     */
    email: string;

    /**
     * Phone number of the guest
     */
    phone?: string;

    /**
     * Street of the guest
     */
    street?: string;

    /**
     * Street number of the guest
     */
    number?: string;

    /**
     * City of the guest
     */
    city: string;

    /**
     * Postal code of the guest
     */
    postalCode: string;

    /**
     * Country code of the guest
     */
    countryCode: string;

}

export type ReplaceReservationModelWithRawHttp = ReplaceReservationModel & ResponseModel<ReplaceReservationModel>;

export namespace ReplaceReservationModel {
    export const $metaData = { 
        guestTitle: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        firstName: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 25,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        middleInitial: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        lastName: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 40,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        email: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        phone: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        street: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        number: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        city: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 25,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        postalCode: Object.freeze({ 
            isRequired: true,
            minLength: 1,
            maxLength: 10,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        countryCode: Object.freeze({ 
            isRequired: true,
            minLength: 2,
            maxLength: 2,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReplaceReservationModel>): FormGroup {
        const defaultControls = { 
            guestTitle: getControl($metaData.guestTitle, options, 'guestTitle'),
            firstName: getControl($metaData.firstName, options, 'firstName'),
            middleInitial: getControl($metaData.middleInitial, options, 'middleInitial'),
            lastName: getControl($metaData.lastName, options, 'lastName'),
            email: getControl($metaData.email, options, 'email'),
            phone: getControl($metaData.phone, options, 'phone'),
            street: getControl($metaData.street, options, 'street'),
            number: getControl($metaData.number, options, 'number'),
            city: getControl($metaData.city, options, 'city'),
            postalCode: getControl($metaData.postalCode, options, 'postalCode'),
            countryCode: getControl($metaData.countryCode, options, 'countryCode'),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options));
        prepareFormGroup(group, $metaData, options);

        return group;
    }
}

