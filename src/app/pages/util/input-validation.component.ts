import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'app-input-validation',
    template: `
    <div *ngIf="(hasError())" class="p-error text-danger ng-star-inserted">
        <small>
            {{ errorMessage }}
        </small>
    </div>
  `,
    styles: [`
  `]
})
export class InputValidationComponent {

    @Input() name: any;
    @Input() control: NgModel;
    @Input() form: NgForm;
    @Input() errDef: any;

    errorMessages = [];
    errorMessage = '';

    hasError(): boolean {
        this.errorMessages = [];
        this.errorMessage = '';
        this.name;
        if (this.errDef && (this.control.errors || this.errDef['custom'])) {
            Object.keys(this.errDef).some(key => {
                if (this.control.errors && this.control.errors[key]) {
                    if (key == 'maxlength') {
                        let mensajeMaxlength = this.errDef[key];
                        let maxlength = this.control.errors['maxlength'].requiredLength;
                        mensajeMaxlength = mensajeMaxlength.replace("{{maxLength}}", maxlength);
                        this.errorMessages.push(mensajeMaxlength);
                    } else {
                        this.errorMessages.push(this.errDef[key]);
                    }
                }
                return false;
            });
        }

        for (const m of this.errorMessages) {
            if (this.errorMessage.length > 0) {
                this.errorMessage = this.errorMessage + '.  ';
            }
            this.errorMessage = this.errorMessage + m;
        }
        //return this.errorMessages.length > 0 && this.control.errors && this.control.touched;
        return this.errorMessages.length > 0 && this.control.errors && (this.control.touched || this.control.dirty) && this.control.invalid

    }

}
