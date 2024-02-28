import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SessionStorageService } from '../service/session-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService implements CanActivate {
    constructor(
        public router: Router,
        public sStorage: SessionStorageService,
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const jwtHelper = new JwtHelperService();

        //const user = this.sStorage.getUser();
        const token = this.sStorage.getToken();

        //if (user == null || token == null) {
        if (token == null) { //nulos regresa a login
            this.router.navigate(['/login']);
            return false;
        }

        const ex = jwtHelper.isTokenExpired(token);

        if (ex) { //Expiro el tiempo regresa a login
            this.router.navigate(['/login']);
            return false;
        }
        const expectedRoles = route.data['expectedRoles'];

        //if (expectedRoles && expectedRoles != null && this.validaRol(token.rol, expectedRoles)) { //No corresponde al rol
        //    this.router.navigate(['/error']);
        //    return false;
        //}
        return true;
    }

    canActivateChild() {
        return true;
    }

    validaRol(rol, expectedRoles) {
        let resp = true;
        expectedRoles.forEach(element => {
            if (element.clave == rol) {
                resp = false;
            }
        });
        return resp;
    }

}
