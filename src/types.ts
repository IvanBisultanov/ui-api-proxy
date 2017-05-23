import { ValidatorFn, FormGroup, AbstractControl, FormArray } from '@angular/forms';

export type Control<T> = [T | undefined, ValidatorFn | null | undefined];

export type FullyOptional<T> = {
    [P in keyof T]?: T[P] | FullyOptional<T[P]>;
};

export interface IBuildFormOptions<T> {
    overwriteControls?: {[P in keyof T]?: Control<T[P]> | FormGroup};
    additionalControls?: { [name: string]: (Control<any> | FormGroup | FormArray | boolean) }
    defaultValues?: FullyOptional<T>;
    additionalValidators?: {[P in keyof T]?: ValidatorFn[]};
    skipControls?: (keyof T)[];
    onlyInclude?: (keyof T)[];
    disabledControls?: (keyof T)[];
}

export type FormGroupControls<T> = {
    [P in keyof T]?: Control<T[P]> | FormGroup | FormArray
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

export type ApaleoFormGroupMetaData<T> = {
    [P in keyof T]?: IApaleoPropertyMetaData;
}
