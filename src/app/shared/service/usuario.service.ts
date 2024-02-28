import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Locator } from '../util/locator';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(public _http: HttpClient) { }


    getUsuarios(moduloType: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.usuListado+ '/' + moduloType);
    }

    getUsuariosModRol(moduloType: string, rolType: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.listrol+ '/' + moduloType + '/' + rolType);
    }

}
