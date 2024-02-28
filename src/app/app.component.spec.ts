import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { MenuService } from './shared/service/layout/app.menu.service';
import { AppBreadcrumbComponent } from './layout/app.breadcrumb.component';
import { AppFooterComponent } from './layout/app.footer.component';
import { AppMenuComponent } from './layout/app.menu.component';
import { AppRightPanelComponent } from './layout/app.rightpanel.component';
import { AppTopBarComponent } from './layout/app.topbar.component';
import { BreadcrumbService } from './shared/service/layout/app.breadcrumb.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                TabViewModule
            ],
            declarations: [
                AppComponent,
                AppMenuComponent,
                AppRightPanelComponent,
                AppTopBarComponent,
                AppFooterComponent,
                AppBreadcrumbComponent
            ],
            providers: [BreadcrumbService, MenuService]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
