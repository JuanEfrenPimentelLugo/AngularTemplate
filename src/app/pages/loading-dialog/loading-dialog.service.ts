import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoadingDialogService {
    private subject = new Subject<any>();

    getIsLoading(): Observable<any> {
        return this.subject.asObservable();
    }

    public show() {
        this.subject.next(true);
    }


    public hide() {
        this.subject.next(false);
    }


}
