import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FiltroDto } from '../../model/filtro-dto';
import { SeccionPermisoDto } from '../../model/seccion-permiso-dto';
import { Locator } from '../../util/locator';

@Injectable({
  providedIn: 'root'
})
export class SeccionListadoService {

    public _listSeccionPermiso$ = new BehaviorSubject<SeccionPermisoDto[]>([]);

    constructor(
        public _http: HttpClient
    ) {

    }

    getListSeccionPermiso(filtroDto: FiltroDto) {
        this._http.post<any>(environment.servicios.urlApi
            + Locator.sepListado, filtroDto).subscribe({
                next: (result: any) => {
                    this._listSeccionPermiso$.next(result);
                },
                error: (err: any) => {
                },
                complete: () => {
                }
            });
    }

    deleteSeg(model: SeccionPermisoDto): Observable<any> {
        return this._http.post<any>(environment.servicios.urlApi
            + Locator.sepEliminar, model);
    }
}
