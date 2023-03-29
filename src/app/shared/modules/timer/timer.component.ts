import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  template: '<div>{{time$ | async}}</div>'
})
export class TimerComponent implements OnInit {
  public time$: any;

  constructor() {
  }

  ngOnInit(): void {
    this.time$ = timer(0, 1000).pipe(
      map(t => this.formatTime(t))
    );
  }

  private formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(secs)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}

interface Timer {
  id: number;
  name: string;
  note: string;
}
