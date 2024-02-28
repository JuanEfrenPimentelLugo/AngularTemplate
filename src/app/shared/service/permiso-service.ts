import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Locator } from "../util/locator";


@Injectable({
    providedIn: 'root'
})
export class PermisoService{

    constructor( public _http: HttpClient) { }

    getPermisos(idRol: number, claveSeccion: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.permisos + idRol +"/"+claveSeccion);
    }

}
