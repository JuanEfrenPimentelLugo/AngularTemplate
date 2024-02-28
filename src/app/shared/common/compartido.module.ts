import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from "primeng/breadcrumb";
import { MegaMenuModule } from "primeng/megamenu";
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from "primeng/radiobutton";
import { SidebarModule } from "primeng/sidebar";
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from "primeng/tooltip";
import "reflect-metadata";
import { MessageToastComponent } from 'src/app/pages/toast/message-toast.component';
import { InputValidationComponent } from 'src/app/pages/util/input-validation.component';
import { AbstractGeneral } from '../../pages/util/abstract-general';
import { AuthenticateService as AuthGuard } from '../interceptor/authenticate.service';
import { SessionStorageService } from '../service/session-storage.service';
import { AppBreadcrumbComponent } from 'src/app/layout/app.breadcrumb.component';
import { AppConfigComponent } from 'src/app/layout/app.config.component';
import { AppFooterComponent } from 'src/app/layout/app.footer.component';
import { AppMainComponent } from 'src/app/layout/app.main.component';
import { AppMenuComponent } from 'src/app/layout/app.menu.component';
import { AppMenuitemComponent } from 'src/app/layout/app.menuitem.component';
import { AppTopBarComponent } from 'src/app/layout/app.topbar.component';
import { BreadcrumbService } from '../service/layout/app.breadcrumb.service';
import { MenuService } from '../service/layout/app.menu.service';

@NgModule({
    declarations: [
        AppBreadcrumbComponent,
        AppConfigComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppMenuComponent,
        AppTopBarComponent,
        MessageToastComponent,
        InputValidationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BreadcrumbModule,
        SidebarModule,
        RadioButtonModule,
        TooltipModule,
        MegaMenuModule,
        ToastModule,
        MessagesModule
    ],
    providers: [
        SessionStorageService,
        AuthGuard,
        MenuService,
        BreadcrumbService
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        ToastModule,
        MessagesModule,
        MessageToastComponent,
        InputValidationComponent
    ]


})
export class CompartidoModule { }
