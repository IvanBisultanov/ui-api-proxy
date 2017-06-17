import {
    ValidatorFn,
    Validators,
    FormGroup,
    AbstractControl,
    FormArray
} from '@angular/forms';
import {
    FormGroupControls,
    BuildFormOptions,
    Control,
    ApaleoAbstractControl,
    ApaleoPropertyMetaData,
    ApaleoFormGroupMetaData,
    FullyOptional,
    ApaleoEnumPropertyMetaData,
    ApaleoBasePropertyMetaData,
    PossibleAdditionalControlWithOptionalMetaData,
    PossibleAdditionalControl,
    PossibleAdditionalControlWithMetaData
} from './types';

export function getControl<T, K extends keyof T>(
    metaData: ApaleoPropertyMetaData | ApaleoEnumPropertyMetaData<T[K]>, 
    options: BuildFormOptions<T> | undefined, 
    property: K
): Control<T[K]> {
    const validators = getValidators(metaData, getAdditionalValidators(options, property));

    return [undefined, Validators.compose(validators)];
}

export function adjustDefaultControls<T>(defaultControls: FormGroupControls<T>, options?: BuildFormOptions<T>) {
    if (!options) { return defaultControls; }

    defaultControls = cleanUpDefaultControls(defaultControls, options);
    return Object.assign(defaultControls, options.overwriteControls, convertAdditionalControls(options.additionalControls));
}

export function prepareFormGroup<T>(group: FormGroup, metaData?: ApaleoFormGroupMetaData<T>, options?: BuildFormOptions<T>) {
    options = options || {};

    if (metaData) {
        setMetaData(group, metaData)
    }
    if (options.defaultValues) {
        group.patchValue(options.defaultValues);
    }
    disableFilteredControls(group, options);
}

export function isApaleoAbstractControl(ctrl: ApaleoAbstractControl | AbstractControl): ctrl is ApaleoAbstractControl {
    return !!(<ApaleoAbstractControl>ctrl).apaleoMetaData;
}

export function getValidators(metaData: ApaleoBasePropertyMetaData, additionalValidators?: ValidatorFn[]) {
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

function setMetaData<T>(group: FormGroup, metaData: ApaleoFormGroupMetaData<T>, options?: BuildFormOptions<T>) {
    options = options || {};
    options.additionalControls = options.additionalControls || {};

    for (const key of Object.keys(group.controls) as [string | keyof T]) {
        if (metaData[key]) {
            (<ApaleoAbstractControl>group.controls[key]).apaleoMetaData = metaData[key]!;
        }

        const ac = options.additionalControls[key];
        if (ac && hasMetaData(ac)) {
            (<ApaleoAbstractControl>group.controls[key]).apaleoMetaData = ac.metaData;            
        }
    }
}

function getAdditionalValidators<T, K extends keyof T>(options: BuildFormOptions<T> | undefined, property: K) {
    options = options || {};

    if (options.additionalValidators) {
        return options.additionalValidators[property];
    }
    return undefined;
}

function cleanUpDefaultControls<T>(defaultControls: FormGroupControls<T>, options: BuildFormOptions<T>) {
    if (options.onlyInclude || options.skipControls) {
        if (options.onlyInclude && options.skipControls) {
            throw Error('You can either define "onlyInclude" or "skipControls" in BuildFormOptions but never both.')
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

function convertAdditionalControls(additionalControls?: { [name: string]: PossibleAdditionalControlWithOptionalMetaData }) {
    const ret: { [name: string]: PossibleAdditionalControl } = {};
    
    if (!additionalControls) {
        return ret;
    }

    for (const ctrl in additionalControls) {
        if (additionalControls.hasOwnProperty(ctrl)) {
            const ac = additionalControls[ctrl];

            if (typeof ac === 'boolean') {
                ret[ctrl] = [undefined, undefined];
            } else if (hasMetaData(ac))  {
                ret[ctrl] = ac.control || [undefined, undefined];
            } else {
                ret[ctrl] = ac;
            }
        }
    }

    return ret;
}

function disableFilteredControls<T>(group: FormGroup, options: BuildFormOptions<T>) {
    if (!options.disabledControls) { return; }
    let disabledControls = options.disabledControls;

    if (!(disabledControls instanceof Array)) {
        disabledControls = convertToDisabledControlsArray(disabledControls);
    }
    disabledControls
        .map(ctrlName => group.controls[ctrlName])
        .filter(ctrl => !!ctrl)
        .forEach(ctrl => ctrl.disable());
}

function convertToDisabledControlsArray<T>(disabledControls: {[P in keyof T]?: boolean }): (keyof T)[] {
    const keys = Object.keys(disabledControls) as (keyof T)[];
    return keys.filter(k => !!disabledControls[k]);
}

function hasMetaData(control: PossibleAdditionalControlWithOptionalMetaData): control is PossibleAdditionalControlWithMetaData {
    return !!(control as PossibleAdditionalControlWithMetaData).metaData;
}
