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

import { FormBuilder, FormGroup }                              from '@angular/forms';
import { IBuildFormOptions, IApaleoPropertyMetaData }          from '../../types';
import { ResponseModel }                                       from '../../models';
import { getControl, adjustDefaultControls, prepareFormGroup } from '../../functions.model';

export interface ReservationItemModel {
    /**
     * Reservation id
     */
    id: string;

    /**
     * Status of the reservation
     */
    status: ReservationItemModel.StatusEnum;

    /**
     * Time of check-in
     */
    checkInTime?: Date;

    /**
     * Time of check-out
     */
    checkOutTime?: Date;

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
     * ID of the unit
     */
    unitId?: string;

    /**
     * Total amount
     */
    totalAmount: number;

    /**
     * Date of arrival
     */
    arrival: Date;

    /**
     * ID of the departure
     */
    departure: Date;

    /**
     * Date of creation
     */
    created: Date;

    /**
     * Date of last modification
     */
    modified: Date;

    /**
     * Number of adults
     */
    adults: number;

    /**
     * Number of children
     */
    children: number;

    /**
     * Code of the guest title
     */
    guestTitle: string;

    /**
     * First name of the guest
     */
    firstName: string;

    /**
     * ID of the rateplan
     */
    middleInitial?: string;

    /**
     * Last name of the guest
     */
    lastName: string;

    /**
     * Email address of the guest
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

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}
export namespace ReservationItemModel {
    export enum StatusEnum {
        Confirmed = <any> 'Confirmed',
        InHouse = <any> 'InHouse',
        CheckedOut = <any> 'CheckedOut'
    }
}

export type ReservationItemModelWithRawHttp = ReservationItemModel & ResponseModel<ReservationItemModel>;

export namespace ReservationItemModel {
    export const $metaData = { 
        id: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        status: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isEnum: true,
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        checkInTime: Object.freeze({ 
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        checkOutTime: Object.freeze({ 
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        propertyId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        ratePlanId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        unitTypeId: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        unitId: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        totalAmount: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        arrival: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        departure: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        created: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        modified: Object.freeze({ 
            isRequired: true,
            type: 'Date',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        adults: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        children: Object.freeze({ 
            isRequired: true,
            type: 'number',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        guestTitle: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        firstName: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        middleInitial: Object.freeze({ 
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        lastName: Object.freeze({ 
            isRequired: true,
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
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        postalCode: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        countryCode: Object.freeze({ 
            isRequired: true,
            type: 'string',
            isPrimitiveType: true,
        } as IApaleoPropertyMetaData),
        links: Object.freeze({ 
            type: '{ [key: string]: models.Link; }',
            isMapContainer: true,
        } as IApaleoPropertyMetaData),
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReservationItemModel>): FormGroup {
        const defaultControls = { 
            id: getControl($metaData.id, options, 'id'),
            status: getControl($metaData.status, options, 'status'),
            checkInTime: getControl($metaData.checkInTime, options, 'checkInTime'),
            checkOutTime: getControl($metaData.checkOutTime, options, 'checkOutTime'),
            propertyId: getControl($metaData.propertyId, options, 'propertyId'),
            ratePlanId: getControl($metaData.ratePlanId, options, 'ratePlanId'),
            unitTypeId: getControl($metaData.unitTypeId, options, 'unitTypeId'),
            unitId: getControl($metaData.unitId, options, 'unitId'),
            totalAmount: getControl($metaData.totalAmount, options, 'totalAmount'),
            arrival: getControl($metaData.arrival, options, 'arrival'),
            departure: getControl($metaData.departure, options, 'departure'),
            created: getControl($metaData.created, options, 'created'),
            modified: getControl($metaData.modified, options, 'modified'),
            adults: getControl($metaData.adults, options, 'adults'),
            children: getControl($metaData.children, options, 'children'),
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

