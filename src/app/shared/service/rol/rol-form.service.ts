import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TcRol } from '../../model/tc-rol';
import { Locator } from '../../util/locator';

@Injectable({
  providedIn: 'root'
})
export class RolFormService {

    constructor(
        public _http: HttpClient
    ) { }

    getGuardar(tcRol: TcRol): Observable<any> {
        return this._http.post<any>(environment.servicios.urlApi
            + Locator.rolAgergar, tcRol);
    }

    getFindDescripcion(idRol: number, descripcion: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.rolFindDescripcion + '?descripcion=' + descripcion + (idRol == null?'':'&idRol=' + idRol));
    }

    getFindClave(idRol: number, clave: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.rolFindClave + '?clave=' + clave + (idRol == null?'':'&idRol=' + idRol));
    }

    getObtener(idRol: number): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.rolObtener + idRol);
    }
}
