import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(
        private messageService: MessageService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpResponse<any>) => {
            if (event instanceof HttpResponse && (event.status === 201 || event.status == 200)) {
                if (req.method == "POST") {
                    if (event.body.estatus == 200 || event.body.estatus == 201) {
                        this.messageService.add({ key: 'tst', severity: 'success', summary: '', detail: event.body.mensaje ? event.body.mensaje : "La operación fue realizada con éxito" });
                    } else if (event.body.estatus == 208) {
                        this.messageService.add({ key: 'tst', severity: 'warn', summary: '', detail: event.body.mensaje });
                    } else if (event.body.estatus == 100) {
                        this.messageService.add({ key: 'tst', severity: 'info', summary: '', detail: event.body.mensaje ? event.body.mensaje : "INFO MSG DEFAULT NOT DEFINED" });
                    }
                }
            }

        })
        );
    }
}
