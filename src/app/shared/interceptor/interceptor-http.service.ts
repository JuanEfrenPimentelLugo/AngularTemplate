import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { SessionStorageService } from '../service/session-storage.service';
import { LoginService } from '../service/login/login.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
    providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor {

    constructor(
        public sStorage: SessionStorageService,
        public loginService: LoginService
    ) { }

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.sStorage.getToken();

        let expresionProtocolo = new RegExp("^(http://|https://)?", "g");
        let urlSustituida = req.url.toString();
        urlSustituida = urlSustituida.replace(expresionProtocolo, "");
        urlSustituida = urlSustituida.replace("/", environment.servicios.preurl + "/");
        let indexDoblePunto = req.url.indexOf(":");
        if (indexDoblePunto > 0 && indexDoblePunto <= 6)
            urlSustituida = req.url.substr(0, indexDoblePunto) + "://" + urlSustituida;
        const httpRequest = new HttpRequest(<any>req.method, urlSustituida, req.body, { responseType: req.responseType });
        req = Object.assign(req, httpRequest);


        if (!environment.desactivarcors) {
            req = req.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': 'true',
                    'Content-Security-Policy': "default-src 'self' style-src 'self' 'unsafe-inline';",
                    'withCredentials': 'false',
                }
            });

            if (token != null) {
                req = this.addToken(req, token);
            }

        }

        if (!this.isRefreshing && token != null) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);



            return this.loginService.validaToken().pipe(
                switchMap((data: any) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(data.mensaje);
                    this.sStorage.saveToken(data.mensaje);
                    //this.sStorage.saveUser(decode(data.token));

                    return next.handle(this.addToken(req, data.mensaje));
                }));

        }

        if (token != null) {
            req = this.addToken(req, token);
        }

        return next.handle(req);

    }

    private addToken(req: HttpRequest<any>, token: string) {
        return req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }


}
