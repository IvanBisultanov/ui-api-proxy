import { ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { IControlFactoryOptions, FormGroupControls, IBuildFormOptions, Control, Optional, IApaleoAbstractControl, IApaleoControlMetaData } from './types';

export function getControl<T>(validators: ValidatorFn[], options?: IControlFactoryOptions<T>): [T | undefined, ValidatorFn] {
    const finalValidators = [...validators];
    let defaultValue: T | undefined = undefined;

    if (options) {
        defaultValue = options.defaultValue;

        if (options.additionalValidators) {
            finalValidators.push(...options.additionalValidators);
        }
    }
    return [defaultValue, Validators.compose(finalValidators)];
}

export function getControlOptions<T, K extends keyof T>(options: IBuildFormOptions<T> | undefined, property: K) {
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

export function adjustDefaultControls<T>(defaultControls: FormGroupControls<T>, options?: IBuildFormOptions<T>) {
    if (!options) { return defaultControls; }
    
    defaultControls = cleanUpDefaultControls(defaultControls, options);
    return Object.assign(defaultControls, options.overwriteControls, convertAdditionalControls(options.additionalControls));
}

export function setMetaData(control?: IApaleoAbstractControl, metaData?: IApaleoControlMetaData) {
    if (control) {
        control.apaleoMetaData = metaData || {};
    }
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
