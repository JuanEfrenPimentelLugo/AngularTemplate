import { AbstractControl } from '@angular/forms';

export function ValidadorPassword(control: AbstractControl) {
    const { tusPassword, tusPasswordConfirm } = control.value;

    if (!tusPasswordConfirm || !tusPassword) {
        return null;
    }

    if (tusPasswordConfirm === tusPassword) {
        return null;
    }

    return { fieldMatch: { message: 'La contraseña no coincide' } };
}
