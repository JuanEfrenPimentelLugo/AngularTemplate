import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SeccionPermisoDto } from '../../model/seccion-permiso-dto';
import { Locator } from '../../util/locator';

@Injectable({
  providedIn: 'root'
})
export class SeccionFormService {

    constructor(
        public _http: HttpClient
    ) { }

    getGuardar(seccionPermisoDto: SeccionPermisoDto): Observable<any> {
        return this._http.post<any>(environment.servicios.urlApi
            + Locator.sepAgregarSeguridad, seccionPermisoDto);
    }

    getObtener(idRol: number, idSeccion: number): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.sepObtenerSeguridad + idRol.toString() + (idSeccion == null?'': '/' +idSeccion.toString()));
    }

    getListTree(): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.secListadoTreeNode);
    }

    getObtenerTree(idSeccion: number): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.secObtenerTree + idSeccion.toString());
    }
}
