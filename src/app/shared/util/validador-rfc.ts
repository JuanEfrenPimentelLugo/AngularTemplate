import { FormControl } from '@angular/forms';

export function ValidadorRfc(control: FormControl) {
    if (control.value && control.value != null) {
        if (!((/^[^a-z]*$/).test(control.value))) {
            control.setValue(control.value.toUpperCase());
        }

        if (control.value.match(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)) {
            return null;
        }
        return { invalidRfc: true };
    }
}