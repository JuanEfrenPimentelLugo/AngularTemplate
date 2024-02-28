import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginService } from 'src/app/shared/service/login/login.service';
import { SessionStorageService } from 'src/app/shared/service/session-storage.service';
import { LoadingDialogService } from '../loading-dialog/loading-dialog.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class AppLoginComponent implements OnInit {

    session: any;
    profile: any;
    formLogin = new FormGroup({
        userName: new FormControl('', [
            Validators.required
        ]),
        password: new FormControl('', [
            Validators.required
        ])
    });
    model = { userName: '', password: '' };

    constructor(
        public router: Router,
        public sStorage: SessionStorageService,
        public loginService: LoginService,
        public loadingService: LoadingDialogService
    ) {
    }

    ngOnInit(): void {
        this.formLogin = new FormGroup({
            userName: new FormControl(this.model.userName, [
                Validators.required
            ]),
            password: new FormControl(this.model.password, [
                Validators.required
            ])
        });
        this.sessionInitializer();
    }

    onLogin() {

        if (this.formLogin.invalid) {
            return;
        }
        this.loadingService.show();
        this.loginService.login(this.formLogin.value).subscribe({
            next: (result: any) => {
                this.sStorage.saveToken(result.object);
                this.navegar(jwtDecode(result.object));
            },
            error: (err: any) => {
            },
            complete: () => {
            }
        });
    }

    navegar(dataUser) {
        this.router.navigate(['/home']);
        return;
    }

    sessionInitializer() {
        this.session = null;
        this.profile = null;
        this.sStorage.clearToken();
    }
}
