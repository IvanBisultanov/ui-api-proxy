import { ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';

export type Control<T> = [T | undefined, ValidatorFn | undefined];

export interface IControlFactoryOptions<T> {
    additionalValidators?: ValidatorFn[];
    defaultValue?: T;
}

export interface IBuildFormOptions<T> {
    overwriteControls?: {[P in keyof T]?: Control<T[P]> | FormGroup};
    additionalControls?: { [name: string]: (Control<any> | FormGroup | boolean) }
    defaultValues?: Partial<T>;
    additionalValidators?: {[P in keyof T]?: ValidatorFn[]};
    controlOptions?: {[P in keyof T]?: IControlFactoryOptions<T[P]>};
    skipControls?: (keyof T)[];
    onlyInclude?: (keyof T)[];
}

export type FormGroupControls<T> = {
    [P in keyof T]?: [T[P] | undefined, ValidatorFn] | FormGroup
}

export interface IApaleoAbstractControl extends AbstractControl {
    apaleoMetaData: IApaleoPropertyMetaData;
}

export interface IApaleoPropertyMetaData {
    isRequired?: boolean;
    minLength?: number;
    maxLength?: number;
    type?: string;
    isEnum?: boolean;
    isPrimitiveType?: boolean;
    isListContainer?: boolean;
    isMapContainer?: boolean;
}
