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

import { Validators } from '@angular/forms';
import { ValidatorsFactory, ControlFactory, Control } from '../../types';

export interface MessageItemCollection {
    messages?: Array<string>;

}

export interface MessageItemCollection$Form<T> {
    messages: T;
}

export interface MessageItemCollection$ValidatorFactories extends MessageItemCollection$Form<ValidatorsFactory> {}
export interface MessageItemCollection$ControlFactories extends MessageItemCollection$Form<ControlFactory> {}

export interface MessageItemCollection$FormBuilder {
    messages: Control;
}

const $validators: MessageItemCollection$ValidatorFactories = {
    messages: (() => [
        
        
        
    ]),
}

const $controls: MessageItemCollection$ControlFactories = {
    messages: (() => [null, Validators.compose($validators.messages())]),
}

export const MessageItemCollection = {
    $validators: $validators,
    $controls: $controls,
    $formGroup: (() => {
        return {
            messages: $controls.messages(),
        };
    }) as (() => MessageItemCollection$FormBuilder),
}

