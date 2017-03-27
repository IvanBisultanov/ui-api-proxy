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

export interface ReservationItemModel {
    id?: number;

    propertyId?: models.UppercaseString;

    rateplanId?: models.UppercaseString;

    unitTypeId?: models.UppercaseString;

    checkInTime?: string;

    checkOutTime?: string;

    adults?: number;

    children?: number;

    guestTitle?: string;

    firstName?: string;

    middleInitial?: string;

    lastName?: string;

    email?: models.LowercaseString;

    phone?: string;

    street?: string;

    number?: string;

    city?: string;

    zipCode?: string;

    countryCode?: models.UppercaseString;

    /**
     * Collection of links to related resources
     */
    links?: { [key: string]: models.Link; };

}

export type ReservationItemModelWithRawHttp = ReservationItemModel & ResponseModel<ReservationItemModel>;

export namespace ReservationItemModel {
    export const $validators = {
        id: (() => [
        ]),
        propertyId: (() => [
        ]),
        rateplanId: (() => [
        ]),
        unitTypeId: (() => [
        ]),
        checkInTime: (() => [
        ]),
        checkOutTime: (() => [
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
        zipCode: (() => [
        ]),
        countryCode: (() => [
        ]),
        links: (() => [
        ]),
    };

    export const $controls = { 
        id: ((options?: IControlFactoryOptions<number>) => getControl($validators.id(), options)),
        checkInTime: ((options?: IControlFactoryOptions<string>) => getControl($validators.checkInTime(), options)),
        checkOutTime: ((options?: IControlFactoryOptions<string>) => getControl($validators.checkOutTime(), options)),
        adults: ((options?: IControlFactoryOptions<number>) => getControl($validators.adults(), options)),
        children: ((options?: IControlFactoryOptions<number>) => getControl($validators.children(), options)),
        guestTitle: ((options?: IControlFactoryOptions<string>) => getControl($validators.guestTitle(), options)),
        firstName: ((options?: IControlFactoryOptions<string>) => getControl($validators.firstName(), options)),
        middleInitial: ((options?: IControlFactoryOptions<string>) => getControl($validators.middleInitial(), options)),
        lastName: ((options?: IControlFactoryOptions<string>) => getControl($validators.lastName(), options)),
        phone: ((options?: IControlFactoryOptions<string>) => getControl($validators.phone(), options)),
        street: ((options?: IControlFactoryOptions<string>) => getControl($validators.street(), options)),
        number: ((options?: IControlFactoryOptions<string>) => getControl($validators.number(), options)),
        city: ((options?: IControlFactoryOptions<string>) => getControl($validators.city(), options)),
        zipCode: ((options?: IControlFactoryOptions<string>) => getControl($validators.zipCode(), options)),
    };

    export const $metaData = { 
        id: { 
            type: 'number',
        } as IApaleoControlMetaData,
        checkInTime: { 
            type: 'string',
        } as IApaleoControlMetaData,
        checkOutTime: { 
            type: 'string',
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
        zipCode: { 
            type: 'string',
        } as IApaleoControlMetaData,
    };

    export function $buildForm(fb: FormBuilder, options?: IBuildFormOptions<ReservationItemModel>) {
        const defaultControls = { 
            id: $controls.id(getControlOptions(options, 'id')),
            propertyId: models.UppercaseString.$buildForm(fb),
            rateplanId: models.UppercaseString.$buildForm(fb),
            unitTypeId: models.UppercaseString.$buildForm(fb),
            checkInTime: $controls.checkInTime(getControlOptions(options, 'checkInTime')),
            checkOutTime: $controls.checkOutTime(getControlOptions(options, 'checkOutTime')),
            adults: $controls.adults(getControlOptions(options, 'adults')),
            children: $controls.children(getControlOptions(options, 'children')),
            guestTitle: $controls.guestTitle(getControlOptions(options, 'guestTitle')),
            firstName: $controls.firstName(getControlOptions(options, 'firstName')),
            middleInitial: $controls.middleInitial(getControlOptions(options, 'middleInitial')),
            lastName: $controls.lastName(getControlOptions(options, 'lastName')),
            email: models.LowercaseString.$buildForm(fb),
            phone: $controls.phone(getControlOptions(options, 'phone')),
            street: $controls.street(getControlOptions(options, 'street')),
            number: $controls.number(getControlOptions(options, 'number')),
            city: $controls.city(getControlOptions(options, 'city')),
            zipCode: $controls.zipCode(getControlOptions(options, 'zipCode')),
            countryCode: models.UppercaseString.$buildForm(fb),
        };
        const group = fb.group(adjustDefaultControls(defaultControls, options)!);

        setMetaData(<any>group.controls.id, $metaData.id);
        setMetaData(<any>group.controls.checkInTime, $metaData.checkInTime);
        setMetaData(<any>group.controls.checkOutTime, $metaData.checkOutTime);
        setMetaData(<any>group.controls.adults, $metaData.adults);
        setMetaData(<any>group.controls.children, $metaData.children);
        setMetaData(<any>group.controls.guestTitle, $metaData.guestTitle);
        setMetaData(<any>group.controls.firstName, $metaData.firstName);
        setMetaData(<any>group.controls.middleInitial, $metaData.middleInitial);
        setMetaData(<any>group.controls.lastName, $metaData.lastName);
        setMetaData(<any>group.controls.phone, $metaData.phone);
        setMetaData(<any>group.controls.street, $metaData.street);
        setMetaData(<any>group.controls.number, $metaData.number);
        setMetaData(<any>group.controls.city, $metaData.city);
        setMetaData(<any>group.controls.zipCode, $metaData.zipCode);

        return group;
    }
}

