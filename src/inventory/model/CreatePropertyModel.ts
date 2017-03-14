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

import { Validators, FormBuilder, ValidatorFn, FormGroup }                      from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control, IApaleoAbstractControl }   from '../../types';
import { ResponseModel }                                                        from '../../models';

export interface CreatePropertyModel {
    /**
     * The code for the property that can be shown in reports and table views
     */
    code: string;

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

export type CreatePropertyModelWithRawHttp = CreatePropertyModel & ResponseModel<CreatePropertyModel>;

export interface CreatePropertyModel$Form<T> {
    code: T;
    name: T;
    description: T;
    location: T;
}

export interface CreatePropertyModel$ValidatorFactories extends CreatePropertyModel$Form<ValidatorsFactory> {}
export interface CreatePropertyModel$ControlFactories extends CreatePropertyModel$Form<ControlFactory> {}

const $validators: CreatePropertyModel$ValidatorFactories = {
    code: (() => [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
    ]),
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

const $controls: CreatePropertyModel$ControlFactories = {
    code: (() => [null, Validators.compose($validators.code())]),
    name: (() => [null, Validators.compose($validators.name())]),
    description: (() => [null, Validators.compose($validators.description())]),
    location: (() => [null, Validators.compose($validators.location())]),
}

export const CreatePropertyModel = {
    $validators: $validators,
    $controls: $controls,
    $buildForm: ((fb: FormBuilder) => {
        const group = fb.group({
            code: $controls.code(),
            name: $controls.name(),
            description: $controls.description(),
            location: models.Location.$buildForm(fb),
        });

    
        const codeCtrl: IApaleoAbstractControl = <any>group.controls['code'];
        codeCtrl.apaleoMetaData = { maxLength: 10 };
    
    
    
    

        return group;
    })
}

