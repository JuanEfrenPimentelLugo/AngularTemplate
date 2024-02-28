import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppMainComponent } from './layout/app.main.component';
import { AuthenticateService as AuthGuard } from './shared/interceptor/authenticate.service';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        {
            path: '',
            children: [
                {
                    path: 'login',
                    loadChildren: () => import('./pages/login/login.module').then(m => m.AppLoginModule)
                },
                {
                    path: 'home',
                    component: AppMainComponent,
                    canActivate: [AuthGuard],
                    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
                },
            ]
        },
        { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
        { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
    ], { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
