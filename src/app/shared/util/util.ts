import { Injectable } from "@angular/core";
import { FileType, MensajeValidacionFormType } from "./constant";

@Injectable()
export class Util {
    static fileType = FileType;
    static mensajeValidacionType = MensajeValidacionFormType;
    static fileContent: number[] = [];

    static getMenSizeFile(): string {
        const size = (this.fileType.MAX_SIZE.value / this.fileType.UN_MB_SIZE.value);
        return this.mensajeValidacionType.MEN_FILE_MAX.value.replace('{{maxSize}}', (size + ' MB'));
    }

    static toDownload(reporte: any, nombreArchivo: string) {
        if (reporte !== null) {
            const file = new Blob([reporte], { type: 'application/octet-stream' });
            let fileURL = window.URL.createObjectURL(file);
            let anchor = document.createElement("a");
            anchor.download = nombreArchivo;
            anchor.href = fileURL;
            anchor.click();
        }
    }

    static removeEmptyObjects(x) {
        var emptyKeys = this.getEmptyObjects(x);
        this.removeKey(x, emptyKeys);
        if (x.children && x.children.length > 0) {
            x.children.map(y => this.removeEmptyObjects(y));
        }
        return x;
    }

    private static getEmptyObjects(x) {
        return Object.entries(x).filter(x =>
            Array.isArray(x[1]) && x[1].length == 0 || x[1] == "" || x[1] == null
        );
    }

    private static removeKey(obj, tobeRemoved) {
        if (tobeRemoved && tobeRemoved.length > 0) {
            tobeRemoved.map(key => delete obj[key[0]])
        }
    }

    static getMonthMilliseconds(meses: number){
        return meses * 1000 * 60 * 60 * 24 * 30;
    }

}
