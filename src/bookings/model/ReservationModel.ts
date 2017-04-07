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

import { Validators, FormBuilder, ValidatorFn, FormGroup, AbstractControl }  from '@angular/forms';
import { IBuildFormOptions, IControlFactoryOptions, Control }                from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData }                    from '../../types';
import { ResponseModel }                                                     from '../../models';
import { getControl, getControlOptions, adjustDefaultControls, setMetaData } from '../../functions';

export interface ReservationModel {
    /**
     * Reservation Id
     */
    id?: number;

    /**
     * State of the reservation
     */
    state?: ReservationModel.StateEnum;

    /**
     * Time of check-in
     */
    checkInTime?: Date;

    /**
     * Time of check-out
     */
    checkOutTime?: Date;

    /**
     * Property
     */
    property?: models.EmbeddedPropertyModel;

    /**
     * Rateplan
     */
    rateplan?: models.EmbeddedRateplanModel;

    /**
     * Unit type
     */
    unitType?: models.EmbeddedUnitTypeModel;

    /**
     * Total amount
     */
    totalAmount?: number;

    /**
     * Date of arrival
     */
    arrival?: Date;

    /**
     * Date of departure
     */
    departure?: Date;

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
    guestTitle?: string;

    /**
     * First name of the guest
     */
    firstName?: string;

    /**
     * Middle initial of the guest
     */
    middleInitial?: string;

    /**
     * Last name of the guest
     */
    lastName?: string;

    /**
     * Email address  of the guest
     */
    email?: string;

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
    city?: string;

    /**
     * Postal code of the guest
     */
    postalCode?: string;

    /**
     * Country code of the guest
     */
    countryCode?: string;

}
export namespace ReservationModel {
    export enum StateEnum {
        Confirmed = <any> 'confirmed',
        InHouse = <any> 'inHouse',
        CheckedOut = <any> 'checkedOut'
    }
}

export type ReservationModelWithRawHttp = ReservationModel & ResponseModel<ReservationModel>;

export namespace ReservationModel {
    export const $validators = {
        id: (() => [
        ]),
        state: (() => [
        ]),
        checkInTime: (() => [
        ]),
        checkOutTime: (() => [
        ]),
        property: (() => [
        ]),
        rateplan: (() => [
        ]),
        unitType: (() => [
        ]),
        totalAmount: (() => [
        ]),
        arrival: (() => [
        ]),
        departure: (() => [
        ]),
        adults: (() => [
        ]),
        children: (() => [
        ]),
        guestTitle: (() => [
        ]),
        firstName: (() => [
        ]),
        middleInitial: (() => [
        ]),
        lastName: (() => [
        ]),
        email: (() => [
        ]),
        phone: (() => [
        ]),
        street: (() => [
        ]),
        number: (() => [
        ]),
        city: (() => [
        ]),
        postalCode: (() => [
        ]),
        countryCode: (() => [
        ]),
    };

    export const $controls = { 
        id: ((options?: IControlFactoryOptions<number>) => getControl($validators.id(), options)),
        state: ((options?: IControlFactoryOptions<ReservationModel.StateEnum>) => getControl($validators.state(), options)),
        checkInTime: ((options?: IControlFactoryOptions<Date>) => getControl($validators.checkInTime(), options)),
        checkOutTime: ((options?: IControlFactoryOptions<Date>) => getControl($validators.checkOutTime(), options)),
        totalAmount: ((options?: IControlFactoryOptions<number>) => getControl($validators.totalAmount(), options)),
        arrival: ((options?: IControlFactoryOptions<Date>) => getControl($validators.arrival(), options)),
        departure: ((options?: IControlFactoryOptions<Date>) => getControl($validators.departure(), options)),
        adults: ((options?: IControlFactoryOptions<number>) => getControl($validators.adults(), options)),
        children: ((options?: IControlFactoryOptions<number>) => getControl($validators.children(), options)),
        guestTitle: ((options?: IControlFactoryOptions<string>) => getControl($validators.guestTitle(), options)),
        firstName: ((options?: IControlFactoryOptions<string>) => getControl($validators.firstName(), options)),
        middleInitial: ((options?: IControlFactoryOptions<string>) => getControl($validators.middleInitial(), options)),
        lastName: ((options?: IControlFactoryOptions<string>) => getControl($validators.lastName(), options)),
        email: ((options?: IControlFactoryOptions<string>) => getControl($validators.email(), options)),
        phone: ((options?: IControlFactoryOptions<string>) => getControl($validators.phone(), options)),
        street: ((options?: IControlFactoryOptions<string>) => getControl($validators.street(), options)),
        number: ((options?: IControlFactoryOptions<string>) => getControl($validators.number(), options)),
        city: ((options?: IControlFactoryOptions<string>) => getControl($validators.city(), options)),
        postalCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.postalCode(), options)),
        countryCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.countryCode(), options)),
    };

    export const $metaData = { 
        id: { 
            type: 'number',
        } as IApaleoControlMetaData,
        state: { 
        } as IApaleoControlMetaData,
        checkInTime: { 
            type: 'Date',
        } as IApaleoControlMetaData,
        checkOutTime: { 
            type: 'Date',
        } as IApaleoControlMetaData,
        totalAmount: { 
            type: 'number',
        } as IApaleoControlMetaData,
        arrival: { 
            type: 'Date',
        } as IApaleoControlMetaData,
        departure: { 
            type: 'Date',
        } as IApaleoControlMetaData,
        adults: { 
            type: 'number',
        } as IApaleoControlMetaData,
        children: { 
            type: 'number',
        } as IApaleoControlMetaData,
        guestTitle: { 
            type: 'string',
        } as IApaleoControlMetaData,
        firstName: { 
            type: 'string',
        } as IApaleoControlMetaData,
        middleInitial: { 
            type: 'string',
        } as IApaleoControlMetaData,
        lastName: { 
            type: 'string',
        } as IApaleoControlMetaData,
        email: { 
            type: 'string',
        } as IApaleoControlMetaData,
        phone: { 
            type: 'string',
        } as IApaleoControlMetaData,
        street: { 
            type: 'string',
        } as IApaleoControlMetaData,
        number: { 
            type: 'string',
        } as IApaleoControlMetaData,
        city: { 
            type: 'string',
        } as IApaleoControlMetaData,
        postalCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
        countryCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReservationModel>) {
        const defaultControls = { 
            id: $controls.id(getControlOptions(options, 'id')),
            state: $controls.state(getControlOptions(options, 'state')),
            checkInTime: $controls.checkInTime(getControlOptions(options, 'checkInTime')),
            checkOutTime: $controls.checkOutTime(getControlOptions(options, 'checkOutTime')),
            property: models.EmbeddedPropertyModel.$buildForm(fb),
            rateplan: models.EmbeddedRateplanModel.$buildForm(fb),
            unitType: models.EmbeddedUnitTypeModel.$buildForm(fb),
            totalAmount: $controls.totalAmount(getControlOptions(options, 'totalAmount')),
            arrival: $controls.arrival(getControlOptions(options, 'arrival')),
            departure: $controls.departure(getControlOptions(options, 'departure')),
            adults: $controls.adults(getControlOptions(options, 'adults')),
            children: $controls.children(getControlOptions(options, 'children')),
            guestTitle: $controls.guestTitle(getControlOptions(options, 'guestTitle')),
            firstName: $controls.firstName(getControlOptions(options, 'firstName')),
            middleInitial: $controls.middleInitial(getControlOptions(options, 'middleInitial')),
            lastName: $controls.lastName(getControlOptions(options, 'lastName')),
            email: $controls.email(getControlOptions(options, 'email')),
            phone: $controls.phone(getControlOptions(options, 'phone')),
            street: $controls.street(getControlOptions(options, 'street')),
            number: $controls.number(getControlOptions(options, 'number')),
            city: $controls.city(getControlOptions(options, 'city')),
            postalCode: $controls.postalCode(getControlOptions(options, 'postalCode')),
            countryCode: $controls.countryCode(getControlOptions(options, 'countryCode')),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.id, $metaData.id);
        setMetaData(<any>group.controls.state, $metaData.state);
        setMetaData(<any>group.controls.checkInTime, $metaData.checkInTime);
        setMetaData(<any>group.controls.checkOutTime, $metaData.checkOutTime);
        setMetaData(<any>group.controls.totalAmount, $metaData.totalAmount);
        setMetaData(<any>group.controls.arrival, $metaData.arrival);
        setMetaData(<any>group.controls.departure, $metaData.departure);
        setMetaData(<any>group.controls.adults, $metaData.adults);
        setMetaData(<any>group.controls.children, $metaData.children);
        setMetaData(<any>group.controls.guestTitle, $metaData.guestTitle);
        setMetaData(<any>group.controls.firstName, $metaData.firstName);
        setMetaData(<any>group.controls.middleInitial, $metaData.middleInitial);
        setMetaData(<any>group.controls.lastName, $metaData.lastName);
        setMetaData(<any>group.controls.email, $metaData.email);
        setMetaData(<any>group.controls.phone, $metaData.phone);
        setMetaData(<any>group.controls.street, $metaData.street);
        setMetaData(<any>group.controls.number, $metaData.number);
        setMetaData(<any>group.controls.city, $metaData.city);
        setMetaData(<any>group.controls.postalCode, $metaData.postalCode);
        setMetaData(<any>group.controls.countryCode, $metaData.countryCode);

        return group;
    }
}

