import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MessageService } from 'primeng/api';
import { LoadingDialogComponent } from './pages/loading-dialog/loading-dialog.component';
import { LoadingDialogService } from './pages/loading-dialog/loading-dialog.service';
import { CompartidoModule } from './shared/common/compartido.module';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { InterceptorHttpService } from './shared/interceptor/interceptor-http.service';
import { InterceptorService } from './shared/interceptor/interceptor.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        AppRoutingModule,
        CompartidoModule
    ],
    declarations: [
        AppComponent,
        LoadingDialogComponent
    ],
    providers: [
        LoadingDialogService,
        MessageService,
        { provide: LOCALE_ID, useValue: 'es-MX' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'MXN'},
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorHttpService, multi: true },
        { provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
