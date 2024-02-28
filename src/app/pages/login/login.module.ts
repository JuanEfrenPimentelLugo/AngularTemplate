import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AppLoginComponent } from './login.component';
import { CompartidoModule } from 'src/app/shared/common/compartido.module';

@NgModule({
    declarations: [
        AppLoginComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppLoginComponent
            }
        ]),
        CommonModule,
        ButtonModule,
        InputTextModule,
        CompartidoModule
    ],
    providers: [
    ]
})
export class AppLoginModule { }
