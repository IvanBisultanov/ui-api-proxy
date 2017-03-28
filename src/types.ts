import { ValidatorFn, FormGroup } from '@angular/forms';

export type Control<T> = [T | undefined, ValidatorFn | undefined];

export interface IControlFactoryOptions<T> {
    additionalValidators?: ValidatorFn[];
    defaultValue?: T;
}

export type AdditionalValidators<T> = {
    [P in keyof T]?: ValidatorFn[];
}

export type OverwriteControls<T> = {
    [P in keyof T]?: Control<T[P]> | FormGroup
}

export type FormControlFactoryOptions<T> = {
    [P in keyof T]?: IControlFactoryOptions<T[P]>
}

export interface IBuildFormOptions<T> {
    overwriteControls?: OverwriteControls<T>;
    additionalControls?: { [name: string]: (Control<any> | FormGroup | boolean) }
    defaultValues?: Partial<T>;
    additionalValidators?: AdditionalValidators<T>;
    controlOptions?: FormControlFactoryOptions<T>;
    skipControls?: (keyof T)[];
    onlyInclude?: (keyof T)[];
}

export type FormGroupControls<T> = {
    [P in keyof T]?: [T[P] | undefined, ValidatorFn] | FormGroup
}

export interface IApaleoAbstractControl {
    apaleoMetaData: IApaleoControlMetaData;
}

export interface IApaleoControlMetaData {
    maxLength?: number;
    type?: string;
}
