import { FormControl } from '@angular/forms';

export function ValidadorCurp(control: FormControl) {
    if (control.value && control.value != null) {
        if (!((/^[^a-z]*$/).test(control.value))) {
            control.setValue(control.value.toUpperCase());
        }

        if (control.value.match(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)) {
            return null;
        }
        return { invalidCurp: true };
    }
}
