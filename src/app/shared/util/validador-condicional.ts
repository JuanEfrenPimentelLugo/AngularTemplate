import { ValidatorFn } from '@angular/forms';

export interface BooleanFn {
    (): boolean;
}

export function ValidadorCondicional(predicate: BooleanFn, validator: ValidatorFn[], errorNamespace?: string[]): ValidatorFn {
    return (formControl => {
        if (!formControl.parent) {
            return null;
        }
        let error = null;
        let indexAux = 0;
        if (predicate()) {
            validator.every(function (element, index) {
                error = element(formControl);
                if (error) { return false }
                else { indexAux++; return true }
            })
        }
        if (errorNamespace && error) {
            const customError = {};
            customError[errorNamespace[indexAux]] = error;
            error = customError
        }
        return error;
    })
}
