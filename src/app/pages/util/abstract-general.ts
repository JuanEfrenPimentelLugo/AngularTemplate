import { Component, Injectable, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { PermisosSeccionDto } from '../../shared/model/permisos-seccion-dto';
import { tokenDto } from '../../shared/model/token-dto';
import { UserDetailsDto } from '../../shared/model/user-details-dto';
import { PermisoService } from '../../shared/service/permiso-service';
import { SessionStorageService } from '../../shared/service/session-storage.service';
import { FileType, MensajeValidacionFormType, MimeType, PatternType, PermisoType, Secciones } from '../../shared/util/constant';
import {jwtDecode} from 'jwt-decode';

@Injectable(
    {
        providedIn: 'root'
    }
)
export abstract class AbstractGeneral {
    protected sessionStorageService:SessionStorageService;
    protected messageService:MessageService;
    protected permisoService:PermisoService;
    protected router:Router;

    permisosList: PermisosSeccionDto[] = new Array();
    msgs: Message[] = [];
    mimeType = MimeType;
    mensajeValidacionType = MensajeValidacionFormType;
    patternType = PatternType;
    fileType = FileType;
    Secciones = Secciones;
    PermisoType = PermisoType;



    constructor(
        public seccion: any,
        public injector: Injector
    ) {
        this.sessionStorageService = injector.get(SessionStorageService);
        this.messageService = injector.get(MessageService);
        this.permisoService = injector.get(PermisoService);
        this.router = injector.get(Router);

        if(seccion != null) {
            this.getPermisos(this.seccion);
        }
    }

    getPermisos(seccion: any){
        let user = this.getUserDetailsDto();
        this.permisoService.getPermisos(user.idRol, seccion.value).subscribe({
            next:(result) => {
                this.permisosList = result;
            },
            error: () => {},
            complete:() => {}
        });
    }

    findPermiso(seccion: any, permiso:any):boolean{
        let permitido = false;
        if(this.permisosList != null) {
            permitido = this.permisosList.some(p=>p.seccion == seccion.value && p.clave == permiso.value );
        }
        return permitido;
    }

    findPermisoPrevio(previoList: any, seccion: any, permiso:any):boolean{
        let permitido = false;
        if(previoList != null) {
            permitido = previoList.some(p=>p.seccion == seccion.value && p.clave == permiso.value );
        }
        return permitido;
    }

    navigateA(route: string, param?: any) {
        this.router.navigate([route], { skipLocationChange: true, queryParams: param });
    }

    validateFormFields(formGroups: FormGroup[]) {
        formGroups.forEach(formulario => {
            Object.keys(formulario.controls).forEach(field => {
                const control = formulario.get(field);
                if (control instanceof FormControl) {
                    control.markAsTouched({ onlySelf: true });
                } else if (control instanceof FormGroup) {
                    this.validateFormFields([control]);
                }
            });
        }
        );
    }

    onDisableView(nombreDocument: string): boolean {
        if (nombreDocument != null) {
            var index = nombreDocument.indexOf("." + this.mimeType.MIME_PDF.extension);
            if (index > 0)
                return true
            else
                return false;
        } else
            return false;
    }

    onKeyPressRegex(event: any, regexFormat: any) {
        let inputCharacter = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !regexFormat.test(inputCharacter)) {
            event.preventDefault();
        }
    }

    getUserDetailsDto(): UserDetailsDto {
        let token: tokenDto = jwtDecode(this.sessionStorageService.getJsonValue('auth-token'));
        return token.userDetails;
    }

    showInfoViaToast(mesSummary: string, mesDetail: string) {
        this.messageService.add({ key: 'tst', severity: 'info', summary: mesSummary, detail: mesDetail });
    }

    showWarnViaToast(mesSummary: string, mesDetail: string) {
        this.messageService.add({ key: 'tst', severity: 'warn', summary: mesSummary, detail: mesDetail });
    }

    showErrorViaToast(mesSummary: string, mesDetail: string) {
        this.messageService.add({ key: 'tst', severity: 'error', summary: mesSummary, detail: mesDetail });
    }

    showSuccessViaToast(mesSummary: string, mesDetail: string) {
        this.messageService.add({ key: 'tst', severity: 'success', summary: mesSummary, detail: mesDetail });
    }

    showInfoViaMessages(mesSummary: string, mesDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: mesSummary, detail: mesDetail });
    }

    showWarnViaMessages(mesSummary: string, mesDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: mesSummary, detail: mesDetail });
    }

    showErrorViaMessages(mesSummary: string, mesDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: mesSummary, detail: mesDetail });
    }

    showSuccessViaMessages(mesSummary: string, mesDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: mesSummary, detail: mesDetail });
    }

}
