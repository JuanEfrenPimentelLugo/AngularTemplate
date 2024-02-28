import { Component, Injector, OnInit } from '@angular/core';
import { UserDetailsDto } from 'src/app/shared/model/user-details-dto';
import { AbstractGeneral } from '../util/abstract-general';
import { LoadingDialogService } from '../loading-dialog/loading-dialog.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AbstractGeneral implements OnInit {

    userDetails: UserDetailsDto;

    constructor(
        public override injector: Injector,
        public loadingService: LoadingDialogService
    ) {
        super(null, injector);
    }

    ngOnInit(): void {
        this.userDetails = this.getUserDetailsDto();
        this.loadingService.hide();
    }

}
