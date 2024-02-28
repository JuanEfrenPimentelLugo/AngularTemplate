import { DireccionDto } from './../model/direccion-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ItemSelectDto } from '../model/item-select-dto';
import { Locator } from '../util/locator';

@Injectable({
    providedIn: 'root'
})
export class CatalogoService {

    constructor(
        public _http: HttpClient,
    ) { }

    getTipoAdjudicacion(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoAdjudicacion)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoObraPublica(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoObraPublica)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoFinanciamiento(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoFinanciamiento)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoNota(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoNota)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoBitacoraOp(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoBitacoraOp)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getEstatusBitOp(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catEstatusBitOp)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getRolesByClave(moduloType: string): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catRolesByClave + moduloType)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getProveedor(moduloType: string): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catProveedores + '/' + moduloType)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoDocumento(solDocType: string, clave: string, idParent: number): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoDocumento + solDocType + '/' + clave + (idParent == null?'':'/' + idParent.toString()))
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoContribuyente(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catTipoContribuyente)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getCategoriaProveedor(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catCategoriaProveedor)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getAutoCompleteCp(query:string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catAutoCompleteCp + query);
    }

    getEstado(): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catEstado)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getMunicipio(idEstado: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catMunicipio + idEstado)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getColonia(idMunicipio: string): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catColonia + idMunicipio)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getDireccion(cp: string, idColonia: number): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catDireccion + (cp == null?'':'?cp=' + cp) + (idColonia == null?'':'?idColonia=' + idColonia));
    }

    getBanco(): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catBanco)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getTipoCombustible(): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catCombustible)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getSolCombVehiculo(idSolicitudCombustible: number): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catSolCombVehiculo + idSolicitudCombustible)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getSemana(): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catSemana)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getArea(): Observable<any> {
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catArea)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }
    
    getEstatusSolComb(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catEstatusSolComb)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

    getModulo(): Observable<any>{
        return this._http.get<any>(environment.servicios.urlApi
            + Locator.catModulo)
            .pipe(map((data: any[]) => data.map(item => plainToClass(ItemSelectDto, item))));
    }

}
