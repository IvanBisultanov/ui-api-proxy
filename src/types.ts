import { ValidatorFn, FormGroup, AbstractControl, FormArray } from '@angular/forms';

export type Control<T> = [T | undefined, ValidatorFn | null | undefined];

export type FullyOptional<T> = {
    [P in keyof T]?: T[P] | FullyOptional<T[P]>;
};

export interface BuildFormOptions<T> {
    overwriteControls?: {[P in keyof T]?: Control<T[P]> | FormGroup};
    additionalControls?: { [name: string]: PossibleAdditionalControlWithOptionalMetaData }
    defaultValues?: FullyOptional<T>;
    additionalValidators?: {[P in keyof T]?: ValidatorFn[]};
    skipControls?: (keyof T)[];
    onlyInclude?: (keyof T)[];
    disabledControls?: (keyof T)[] | {[P in keyof T]?: boolean };
}

export type FormGroupControls<T> = {
    [P in keyof T]?: Control<T[P]> | FormGroup | FormArray
}

export interface ApaleoAbstractControl<T extends ApaleoBasePropertyMetaData = ApaleoBasePropertyMetaData> extends AbstractControl {
    apaleoMetaData: T;
}

export interface ApiModule {}

export interface ApaleoBasePropertyMetaData {
    isRequired?: boolean;
    minLength?: number;
    maxLength?: number;
    type?: string;
    isEnum?: boolean;
    isPrimitiveType?: boolean;
    isListContainer?: boolean;
    isMapContainer?: boolean;    
}

export interface ApaleoPropertyMetaData extends ApaleoBasePropertyMetaData {
    isEnum?: false;
}

export interface ApaleoEnumPropertyMetaData<T> extends ApaleoBasePropertyMetaData {
    isEnum: true;
    allowedEnumValues: ReadonlyArray<T>;
}

export type ApaleoFormGroupMetaData<T> = {
    [P in keyof T]?: ApaleoPropertyMetaData | ApaleoEnumPropertyMetaData<T[P]>;
};

export type PossibleAdditionalControl = Control<any> | FormGroup | FormArray;
export type PossibleAdditionalControlWithMetaData = { metaData: ApaleoPropertyMetaData; control?: PossibleAdditionalControl; };
export type PossibleAdditionalControlWithOptionalMetaData =
    PossibleAdditionalControl | 
    boolean | 
    PossibleAdditionalControlWithMetaData
