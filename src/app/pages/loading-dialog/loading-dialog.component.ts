import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingDialogService } from './loading-dialog.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-loading-dialog',
    templateUrl: './loading-dialog.component.html',
    styles: [`
   /* Loading */

.animationload {
   background-color: #f8f8f9;
   height: 100%;
   left: 0;
   position: fixed;
   top: 0;
   width: 100%;
   z-index: 10000;
   opacity: 0.3;
}

.osahanloading {
   animation: 1.5s linear 0s normal none infinite running osahanloading;
   background: #014f4f none repeat scroll 0 0;
   border-radius: 50px;
   height: 50px;
   left: 50%;
   margin-left: -25px;
   margin-top: -25px;
   position: absolute;
   top: 50%;
   width: 50px;
}

@keyframes osahanloading {
   0% {
      transform: rotate(0deg);
   }
   50% {
      background: #3f679e none repeat scroll 0 0;
      transform: rotate(180deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
   `],
    encapsulation: ViewEncapsulation.None
})
export class LoadingDialogComponent {
    subscription: Subscription;
    isLoading: boolean = true;

    constructor(
        private loadingService: LoadingDialogService
    ) {
        this.isLoading = false;
        this.subscription = this.loadingService.getIsLoading().subscribe(res => {
            this.isLoading = res;
        });
    }

    public show() {
        this.loadingService.show();
    }

    public hide() {
        this.loadingService.hide();
    }
}
