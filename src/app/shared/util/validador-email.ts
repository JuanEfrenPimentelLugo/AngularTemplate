import { FormControl } from '@angular/forms';

export function ValidadorEmail(control: FormControl) {
    // RFC 2822 compliant regex
    if (control.value &&
        control.value.match(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
    ) {
        return null;
    } else {
        return { invalidEmailAddress: true };
    }
}
