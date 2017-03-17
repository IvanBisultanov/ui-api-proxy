/**
 * Apaleo Account API
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
 * With this request you can modify an account
 */
import { Validators, FormBuilder, ValidatorFn, FormGroup }          from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control }               from '../../types';
import { IApaleoAbstractControl, IApaleoControlMetaData, Optional } from '../../types';
import { ResponseModel }                                            from '../../models';

export interface ReplaceAccountModel {
    /**
     * The name for the account, which usually should be the company name
     */
    name: string;

    /**
     * The description for the account
     */
    description: string;

    /**
     * The URL of the account logo
     */
    logoUrl?: string;

    /**
     * The location of the account
     */
    location: models.Location;

}

export type ReplaceAccountModelWithRawHttp = ReplaceAccountModel & ResponseModel<ReplaceAccountModel>;

export interface ReplaceAccountModel$Form<T> {
    name: T;
    description: T;
    logoUrl: T;
    location: T;
}

export interface ReplaceAccountModel$ValidatorFactories extends ReplaceAccountModel$Form<ValidatorsFactory> {}
export interface ReplaceAccountModel$ControlFactories extends ReplaceAccountModel$Form<ControlFactory> {}
export interface ReplaceAccountModel$Control extends ReplaceAccountModel$Form<Control | FormGroup> {}
export interface ReplaceAccountModel$ControlMetaData extends ReplaceAccountModel$Form<IApaleoControlMetaData> {}

export namespace ReplaceAccountModel {
    export const $validators: ReplaceAccountModel$ValidatorFactories = {
        name: (() => [
            Validators.required,
            
            Validators.maxLength(40),
        ]),
        description: (() => [
            Validators.required,
            
            
        ]),
        logoUrl: (() => [
            
            
            
        ]),
        location: (() => [
            Validators.required,
            
            
        ]),
    };

    export const $controls: ReplaceAccountModel$ControlFactories = {
        name: (() => [null, Validators.compose($validators.name())]),
        description: (() => [null, Validators.compose($validators.description())]),
        logoUrl: (() => [null, Validators.compose($validators.logoUrl())]),
        location: (() => [null, Validators.compose($validators.location())]),
    };

    export const $metaData: ReplaceAccountModel$ControlMetaData = {
        name: {
            
            maxLength: 40,
            type: 'string',
            
        },
        description: {
            
            
            type: 'string',
            
        },
        logoUrl: {
            
            
            type: 'string',
            
        },
        location: {
            
        },
    };

    export function $buildForm(fb: FormBuilder, specificControls?: Optional<ReplaceAccountModel$Control>, additionalControls?: { [name: string]: (Control | FormGroup) }) {
        const defaultControls = {
            name: $controls.name(),
            description: $controls.description(),
            logoUrl: $controls.logoUrl(),
            location: models.Location.$buildForm(fb),
        };

        const group = fb.group(Object.assign(defaultControls, specificControls, additionalControls));

    
        const nameCtrl: IApaleoAbstractControl = <any>group.controls['name'];
        nameCtrl.apaleoMetaData = $metaData.name;
    
    
        const descriptionCtrl: IApaleoAbstractControl = <any>group.controls['description'];
        descriptionCtrl.apaleoMetaData = $metaData.description;
    
    
        const logoUrlCtrl: IApaleoAbstractControl = <any>group.controls['logoUrl'];
        logoUrlCtrl.apaleoMetaData = $metaData.logoUrl;
    
    

        return group;
    }
}

