import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
    RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),
        CommonModule
    ],
    bootstrap: [AppComponent]
})
export class HomeModule { }
