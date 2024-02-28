import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingDialogService } from 'src/app/pages/loading-dialog/loading-dialog.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        public router: Router,
        private messageService: MessageService,
        private loadingService: LoadingDialogService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
            switch (error.status) {
                case 400:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error != null ? (error.error != null ? error.error.mensaje : 'Ocurrio un error') : 'Ocurrio un error' });
                    break;
                case 401:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error != null ? (error.error != null && error.error.mensaje ? error.error.mensaje : 'Es necesario identificarse para completar esta solicitud') : 'Es necesario identificarse para completar esta solicitud' });
                    this.router.navigate(['/login']);
                    break;
                case 403:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'No se cuentan con los permisos necesarios para realizar esta solicitud' });
                    break;
                case 404:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Datos no encontrados', detail: 'Información no encontrada' });
                    break;
                case 405:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Método no valido para completar esta solicitud' });
                    break;
                case 408:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Tardo demasiado tiempo para completar esta solicitud' });
                    break;
                case 409:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error != null ? (error.error != null ? error.error.mensaje : 'Ocurrio un error') : 'Ocurrio un error' });
                    break;
                case 422:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Faltan parametros para completar esta solicitud', detail: 'Solicitud no completada' });
                    break;
                case 500:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.error != null && error.error.error });
                    break;
                case 502:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Respuesta inválida por parte del servidor' });
                    break;
                case 504:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'El servidor no pudo procesar la respuesta a tiempo' });
                    break;
                case 505:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'La solicitud realizada no es soportada por el servidor' });
                    break;
                case 0:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'No se puede establecer conexión con el servidor' });
                    break;
                case 40400:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.error != null && error.error.mensaje });
                    break;
                case 550:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.error != null && error.error.mensaje });
                    break;
                default:
                    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Ocurrio un error' });
                    break;

            }
            this.loadingService.hide();
            return throwError(error);
        }),
        );
    }
}
