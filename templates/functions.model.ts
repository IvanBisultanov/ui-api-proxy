import {
    ValidatorFn,
    Validators,
    FormGroup, 
    AbstractControl
} from '@angular/forms';
import {
    IControlFactoryOptions,
    FormGroupControls,
    IBuildFormOptions,
    Control,
    IApaleoAbstractControl,
    IApaleoPropertyMetaData
} from './types';

export function getControl<T, K extends keyof T>(metaData: IApaleoPropertyMetaData, options: IBuildFormOptions<T> | undefined, property: K): [T[K] | undefined, ValidatorFn] {
    const ctrlOptions = getControlOptions(options, property);
    const validators = getValidators(metaData, ctrlOptions.additionalValidators);

    return [ctrlOptions.defaultValue, Validators.compose(validators)];
}

export function adjustDefaultControls<T>(defaultControls: FormGroupControls<T>, options?: IBuildFormOptions<T>) {
    if (!options) { return defaultControls; }

    defaultControls = cleanUpDefaultControls(defaultControls, options);
    return Object.assign(defaultControls, options.overwriteControls, convertAdditionalControls(options.additionalControls));
}

export function setMetaData(group: FormGroup, metaData: { [key: string]: IApaleoPropertyMetaData }) {
    for (const key of Object.keys(group.controls)) {
        if (metaData[key]) {
            (<IApaleoAbstractControl>group.controls[key]).apaleoMetaData = metaData[key];
        }
    }
}

export function isApaleoAbstractControl(ctrl: IApaleoAbstractControl | AbstractControl): ctrl is IApaleoAbstractControl {
    return !!(<IApaleoAbstractControl>ctrl).apaleoMetaData;
}

function getControlOptions<T, K extends keyof T>(options: IBuildFormOptions<T> | undefined, property: K) {
    options = options || {};
    let co: IControlFactoryOptions<T[K]> = {};

    if (options.controlOptions) {
        co = options.controlOptions[property] || {};
    }
    if (options.additionalValidators) {
        const additionalValidators = options.additionalValidators[property] || [];

        if (co.additionalValidators) {
            co.additionalValidators.push(...additionalValidators);
        } else {
            co.additionalValidators = additionalValidators;
        }
    }
    if (co.defaultValue === undefined && options.defaultValues) {
        co.defaultValue = options.defaultValues[property];
    }
    return co;
}

function getValidators(metaData: IApaleoPropertyMetaData, additionalValidators?: ValidatorFn[]) {
    const validators = [] as ValidatorFn[];

    if (metaData.isRequired) {
        validators.push(Validators.required);
    }
    if (metaData.minLength !== undefined) {
        validators.push(Validators.minLength(metaData.minLength));
    }
    if (metaData.maxLength !== undefined) {
        validators.push(Validators.maxLength(metaData.maxLength));
    }
    if (additionalValidators) {
        validators.push(...additionalValidators);
    }
    return validators;
}

function cleanUpDefaultControls<T>(defaultControls: FormGroupControls<T>, options: IBuildFormOptions<T>) {
    if (options.onlyInclude || options.skipControls) {
        if (options.onlyInclude && options.skipControls) {
            throw Error('You can either define "onlyInclude" or "skipControls" in IBuildFormOptions but never both.')
        }

        if (options.onlyInclude) {
            const keep = new Set<string>(options.onlyInclude);
            options.skipControls = Object.keys(defaultControls).filter(k => !keep.has(k)) as (keyof T)[];
        }

        for (const key of options.skipControls!) {
            delete defaultControls[key];
        }
    }
    return defaultControls;
}

function convertAdditionalControls(additionalControls?: { [name: string]: (Control<any> | FormGroup | boolean) }) {
    const ret: { [name: string]: (Control<any> | FormGroup) } = {};

    if (!additionalControls) {
        return ret;
    }

    for (const ctrl in additionalControls) {
        if (additionalControls.hasOwnProperty(ctrl)) {
            const ac = additionalControls[ctrl];

            if (typeof ac === 'boolean') {
                ret[ctrl] = [undefined, undefined];
            } else {
                ret[ctrl] = ac;
            }
        }
    }

    return ret;
}
