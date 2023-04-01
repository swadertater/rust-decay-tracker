import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() config: TimerConfig;

  @Output() closeClick = new EventEmitter();

  public countdown: string;
  public timerSubscription: Subscription;

  ngOnInit(): void {
    this.timerSubscription = interval(1000)
      .pipe(
        takeWhile(() => this.config.startTime >= 0),
        map(() => this.config.startTime--)
      )
      .subscribe(currentTime => {
        this.updateCountdown(currentTime);
      });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private updateCountdown(currentTime: number): void {
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = currentTime % 60;

    this.countdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  public onCloseClick() {
    this.closeClick.emit();
  }
}

export interface TimerConfig {
  startTime: number;
  label: string;
  x: string;
  y: string;
  notes: string;
}
