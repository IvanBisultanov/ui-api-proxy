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

import { Validators, FormBuilder, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface GetReservationListResponse {
    /**
     * List of rateplans
     */
    reservations?: Array<models.ReservationDto>;

}

export interface GetReservationListResponse$Form<T> {
    reservations: T;
}

export interface GetReservationListResponse$ValidatorFactories extends GetReservationListResponse$Form<ValidatorsFactory> {}
export interface GetReservationListResponse$ControlFactories extends GetReservationListResponse$Form<ControlFactory> {}

const $validators: GetReservationListResponse$ValidatorFactories = {
    reservations: (() => [
        
        
        
    ]),
}

const $controls: GetReservationListResponse$ControlFactories = {
    reservations: (() => [null, Validators.compose($validators.reservations())]),
}

export const GetReservationListResponse = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) =>
        fb.group({
        })),
}

