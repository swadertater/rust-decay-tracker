import { Component } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent {
  public timers: TimerData[] = [];

  public addTimer() {
    this.timers.push({id: this.timers.length + 1});
  }

  public deleteTimer(id: number): void {
    this.timers = this.timers.filter(timer => timer.id !== id);
  }
}

export interface TimerData {
  id: number;
}
