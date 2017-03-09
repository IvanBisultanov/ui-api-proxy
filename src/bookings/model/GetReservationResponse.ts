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
 * With this request you can setup a new account with an admin user
 */
import { Validators, FormBuilder, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control }      from '../../types';
import { ResponseModel }                                   from '../../models';

export interface GetReservationResponse {
    id?: number;

    /**
     * The PropertyId for the reservation
     */
    propertyId: number;

    checkInTime: string;

    checkOutTime: string;

    adults: number;

    children: number;

    guestTitle: string;

    firstName: string;

    middleInitial?: string;

    lastName: string;

    email?: string;

    phone?: string;

    street?: string;

    number?: string;

    city: string;

    zipCode: string;

    countryCode: string;

    ratePlanId: number;

}

export type GetReservationResponseWithRawHttp = GetReservationResponse & ResponseModel<GetReservationResponse>;

export interface GetReservationResponse$Form<T> {
    id: T;
    propertyId: T;
    checkInTime: T;
    checkOutTime: T;
    adults: T;
    children: T;
    guestTitle: T;
    firstName: T;
    middleInitial: T;
    lastName: T;
    email: T;
    phone: T;
    street: T;
    number: T;
    city: T;
    zipCode: T;
    countryCode: T;
    ratePlanId: T;
}

export interface GetReservationResponse$ValidatorFactories extends GetReservationResponse$Form<ValidatorsFactory> {}
export interface GetReservationResponse$ControlFactories extends GetReservationResponse$Form<ControlFactory> {}

const $validators: GetReservationResponse$ValidatorFactories = {
    id: (() => [
        
        
        
    ]),
    propertyId: (() => [
        Validators.required,
        
        
    ]),
    checkInTime: (() => [
        Validators.required,
        
        
    ]),
    checkOutTime: (() => [
        Validators.required,
        
        
    ]),
    adults: (() => [
        Validators.required,
        
        
    ]),
    children: (() => [
        Validators.required,
        
        
    ]),
    guestTitle: (() => [
        Validators.required,
        
        
    ]),
    firstName: (() => [
        Validators.required,
        
        Validators.maxLength(25),
    ]),
    middleInitial: (() => [
        
        
        Validators.maxLength(5),
    ]),
    lastName: (() => [
        Validators.required,
        
        Validators.maxLength(40),
    ]),
    email: (() => [
        
        
        
    ]),
    phone: (() => [
        
        
        
    ]),
    street: (() => [
        
        
        Validators.maxLength(40),
    ]),
    number: (() => [
        
        
        
    ]),
    city: (() => [
        Validators.required,
        
        Validators.maxLength(25),
    ]),
    zipCode: (() => [
        Validators.required,
        
        Validators.maxLength(10),
    ]),
    countryCode: (() => [
        Validators.required,
        
        Validators.maxLength(2),
    ]),
    ratePlanId: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: GetReservationResponse$ControlFactories = {
    id: (() => [null, Validators.compose($validators.id())]),
    propertyId: (() => [null, Validators.compose($validators.propertyId())]),
    checkInTime: (() => [null, Validators.compose($validators.checkInTime())]),
    checkOutTime: (() => [null, Validators.compose($validators.checkOutTime())]),
    adults: (() => [null, Validators.compose($validators.adults())]),
    children: (() => [null, Validators.compose($validators.children())]),
    guestTitle: (() => [null, Validators.compose($validators.guestTitle())]),
    firstName: (() => [null, Validators.compose($validators.firstName())]),
    middleInitial: (() => [null, Validators.compose($validators.middleInitial())]),
    lastName: (() => [null, Validators.compose($validators.lastName())]),
    email: (() => [null, Validators.compose($validators.email())]),
    phone: (() => [null, Validators.compose($validators.phone())]),
    street: (() => [null, Validators.compose($validators.street())]),
    number: (() => [null, Validators.compose($validators.number())]),
    city: (() => [null, Validators.compose($validators.city())]),
    zipCode: (() => [null, Validators.compose($validators.zipCode())]),
    countryCode: (() => [null, Validators.compose($validators.countryCode())]),
    ratePlanId: (() => [null, Validators.compose($validators.ratePlanId())]),
}

export const GetReservationResponse = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
            id: $controls.id(),
            propertyId: $controls.propertyId(),
            checkInTime: $controls.checkInTime(),
            checkOutTime: $controls.checkOutTime(),
            adults: $controls.adults(),
            children: $controls.children(),
            guestTitle: $controls.guestTitle(),
            firstName: $controls.firstName(),
            middleInitial: $controls.middleInitial(),
            lastName: $controls.lastName(),
            email: $controls.email(),
            phone: $controls.phone(),
            street: $controls.street(),
            number: $controls.number(),
            city: $controls.city(),
            zipCode: $controls.zipCode(),
            countryCode: $controls.countryCode(),
            ratePlanId: $controls.ratePlanId(),
        })),
}

