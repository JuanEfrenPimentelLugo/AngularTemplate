import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FiltroDto } from '../../model/filtro-dto';
import { TcRol } from '../../model/tc-rol';
import { Locator } from '../../util/locator';

@Injectable({
  providedIn: 'root'
})
export class RolListadoService {

    public _listRol$ = new BehaviorSubject<TcRol[]>([]);

    constructor(
        public _http: HttpClient
    ) {

    }

    getListRolTree(filtroDto: FiltroDto) {
        this._http.post<any>(environment.servicios.urlApi
            + Locator.rolListadoTree, filtroDto).subscribe({
                next: (result: any) => {
                    this._listRol$.next(result);
                },
                error: (err: any) => {
                },
                complete: () => {
                }
            });
    }

    deleteRol(model: TcRol): Observable<any> {
        return this._http.post<any>(environment.servicios.urlApi
            + Locator.rolEliminar, model);
    }

    getListDataToggler(filtroDto: FiltroDto): Observable<any> {
        return this._http.post<any>(environment.servicios.urlApi
            + Locator.rolListadoTree, filtroDto);
    }
}
