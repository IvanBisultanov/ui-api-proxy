import { ValidatorFn } from '@angular/forms';

export type ValidatorsFactory = () => ValidatorFn[];
export type Control = [null, ValidatorFn];
export type ControlFactory = () => Control;
