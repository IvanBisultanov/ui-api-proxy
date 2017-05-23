import {
    ValidatorFn,
    Validators,
    FormGroup,
    AbstractControl,
    FormArray
} from '@angular/forms';
import {
    FormGroupControls,
    IBuildFormOptions,
    Control,
    IApaleoAbstractControl,
    IApaleoPropertyMetaData,
    ApaleoFormGroupMetaData,
    FullyOptional
} from './types';

export function getControl<T, K extends keyof T>(metaData: IApaleoPropertyMetaData, options: IBuildFormOptions<T> | undefined, property: K): Control<T[K]> {
    const validators = getValidators(metaData, getAdditionalValidators(options, property));

    return [undefined, Validators.compose(validators)];
}

export function adjustDefaultControls<T>(defaultControls: FormGroupControls<T>, options?: IBuildFormOptions<T>) {
    if (!options) { return defaultControls; }

    defaultControls = cleanUpDefaultControls(defaultControls, options);
    return Object.assign(defaultControls, options.overwriteControls, convertAdditionalControls(options.additionalControls));
}

export function prepareFormGroup<T>(group: FormGroup, metaData?: ApaleoFormGroupMetaData<T>, options?: IBuildFormOptions<T>) {
    options = options || {};

    if (metaData) {
        setMetaData(group, metaData)
    }
    if (options.defaultValues) {
        group.patchValue(options.defaultValues);
    }
    disableFilteredControls(group, options);
}

export function isApaleoAbstractControl(ctrl: IApaleoAbstractControl | AbstractControl): ctrl is IApaleoAbstractControl {
    return !!(<IApaleoAbstractControl>ctrl).apaleoMetaData;
}

export function getValidators(metaData: IApaleoPropertyMetaData, additionalValidators?: ValidatorFn[]) {
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

function setMetaData<T>(group: FormGroup, metaData: ApaleoFormGroupMetaData<T>) {
    for (const key of Object.keys(group.controls) as [keyof T]) {
        if (metaData[key]) {
            (<IApaleoAbstractControl>group.controls[key]).apaleoMetaData = metaData[key]!;
        }
    }
}

function getAdditionalValidators<T, K extends keyof T>(options: IBuildFormOptions<T> | undefined, property: K) {
    options = options || {};

    if (options.additionalValidators) {
        return options.additionalValidators[property];
    }
    return undefined;
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

function convertAdditionalControls(additionalControls?: { [name: string]: (Control<any> | FormGroup | FormArray | boolean) }) {
    const ret: { [name: string]: (Control<any> | FormGroup | FormArray) } = {};

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

function disableFilteredControls<T>(group: FormGroup, options: IBuildFormOptions<T>) {
    if (!options.disabledControls) { return; }

    options.disabledControls
        .map(ctrlName => group.controls[ctrlName])
        .filter(ctrl => !!ctrl)
        .forEach(ctrl => ctrl.disable());
}
