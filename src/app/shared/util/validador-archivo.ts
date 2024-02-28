import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function FileValidator(control: FormControl, field: FormlyFieldConfig, options = {}): ValidationErrors {
    if (control.value != null && control.value instanceof FileList && control.value.length > 0) {
        // extension
        var newarr = options['extensiones'].split(",");
        let exts = '';
        for (let index = 0; index < newarr.length; index++) {
            if (index == 0) {
                exts = exts + newarr[index].trim();
            } else {
                exts = exts + '|' + newarr[index].trim();
            }
        }
        if (!(new RegExp('(' + exts + ')$', 'i').test(control.value[0].name))) {
            return { 'extension': { message: `Extensiones validas: ` + options['extensiones'] } }
        }
        const k = 1.0E-6;
        const tmn = parseFloat((control.value[0].size / (1024 * 1024)).toFixed(2));
        // tamaño
        if (tmn > options['maxSize']) {
            return { 'tamanio': { message: 'Excede el tamaño maximo de ' + options['maxSize'] + ' MB' } }
        }


        if (options['listaDocumentos']) {
            let pos = options['listaDocumentos'].map(function (e) { return e.sDocumento; }).indexOf(control.value[0].name);

            if (pos > -1) {
                return { 'nombre': { message: 'Ya existe un archivo con el mismo nombre.' } }
            }
        }

        return null;


    }

    if (control.value != null && control.value instanceof ArrayBuffer) {
        if (control.errors) {
            return control.errors
        }
    }
}
