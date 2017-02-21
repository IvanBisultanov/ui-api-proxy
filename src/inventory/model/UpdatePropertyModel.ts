/**
 * Apaleo Inventory API
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
 * With this request you can modify a property
 */
import { Validators } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface UpdatePropertyModel {
    /**
     * The name for the property
     */
    name: { [key: string]: string; };

    /**
     * The description for the property
     */
    description: { [key: string]: string; };

    /**
     * The location of the property
     */
    location: models.Location;

}

export interface UpdatePropertyModel$Form<T> {
    name: T;
    description: T;
    location: T;
}

export interface UpdatePropertyModel$ValidatorFactories extends UpdatePropertyModel$Form<ValidatorsFactory> {}
export interface UpdatePropertyModel$ControlFactories extends UpdatePropertyModel$Form<ControlFactory> {}
export interface UpdatePropertyModel$FormBuiler extends UpdatePropertyModel$Form<Control> {}

const $validators: UpdatePropertyModel$ValidatorFactories = {
    name: (() => [
        Validators.required,
        
        
    ]),
    description: (() => [
        Validators.required,
        
        
    ]),
    location: (() => [
        Validators.required,
        
        
    ]),
}

const $controls: UpdatePropertyModel$ControlFactories = {
    name: (() => [null, Validators.compose($validators.name())]),
    description: (() => [null, Validators.compose($validators.description())]),
    location: (() => [null, Validators.compose($validators.location())]),
}

export const UpdatePropertyModel = {
    $validators: $validators,
    $controls: $controls,
    $formGroup: (() => {
        return {
            name: $controls.name(),
            description: $controls.description(),
            location: $controls.location(),
        };
    }) as (() => UpdatePropertyModel$FormBuiler),
}

