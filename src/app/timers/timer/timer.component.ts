import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {interval, Observable, startWith, Subscription, takeUntil, tap} from "rxjs";
import {map, takeWhile} from "rxjs/operators";
import {CleanupComponent} from "../../shared/extensions/classes/disposable";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent extends CleanupComponent implements OnInit, OnDestroy {
  @Input() config: TimerConfig;
  @Output() closeClick = new EventEmitter();

  public countdown$: Observable<number>;

  public countdownDisplay$: Observable<string>;
  public timerExpired$: Observable<boolean>;
  public approximateDecayTime: Date;

  constructor() {
    super();
  }

  ngOnInit(): void {
    const elapsedSecondsStart = Math.floor(((new Date().getTime()) - this.config.startTime) / 1000);
    const elapsedSeconds$ = interval(1000).pipe(map((n) => n + elapsedSecondsStart));

    this.countdown$ = elapsedSeconds$.pipe(
      takeUntil(this.destroy$),
      map((elapsedSeconds) => this.config.decayTime - (elapsedSeconds * 1000)),
    );

    this.countdownDisplay$ = this.countdown$.pipe(
      takeUntil(this.destroy$),
      map((time) => this.convertTimeToString(time))
    );

    this.timerExpired$ = this.countdown$.pipe(
      takeUntil(this.destroy$),
      map((time) => time <= 0)
    );

    this.approximateDecayTime = new Date(this.config.startTime + this.config.decayTime);
  }

  private convertTimeToString(currentTime: number): string {
    const isNegative = currentTime < 0;
    const absoluteSeconds = Math.abs(Math.floor(currentTime / 1000));
    const seconds = absoluteSeconds % 60;
    const minutes = Math.floor(absoluteSeconds / 60) % 60;
    const hours = Math.floor(absoluteSeconds / 60 / 60);

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (isNegative) {
      formattedTime = `-${formattedTime}`;
    }
    return formattedTime;
  }

  public onCloseClick() {
    this.closeClick.emit();
  }
}

export interface TimerConfig {
  startTime: number;
  decayTime: number;
  label: string;
  x: string;
  y: string;
  notes: string;
}
