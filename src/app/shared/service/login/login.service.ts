import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Locator } from '../../util/locator';
import { map } from 'rxjs/operators';
import { LoginDto } from '../../model/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public _http: HttpClient
  ) { }

  login(model): Observable<any> {
    return this._http.post<any>(environment.servicios.urlApi
        + Locator.authAutenticar, model)
        .pipe(map((item) => plainToClass(LoginDto, item)));
  }

  validaToken(): Observable<any> {
    return this._http.get<any>(environment.servicios.urlApi
      + Locator.authValidaToken)
      .pipe(map((item) => plainToClass(LoginDto, item)));
  }
}

function plainToClass(loginDto: typeof LoginDto, item: any): any {
    throw new Error('Function not implemented.');
}

