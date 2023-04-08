import {Component, OnDestroy} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cleanup',
  template: ''
})
export abstract class CleanupComponent implements OnDestroy {
  protected destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected onDestroy$(): Observable<void> {
    return this.destroy$.asObservable();
  }
}
