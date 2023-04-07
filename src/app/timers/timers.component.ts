import {Component} from '@angular/core';
import {TimerFormValue} from "./timer-form/timer-form.component";
import {TimerConfig} from "./timer/timer.component";
import {DecayTimeCalculatorService} from "../shared/services/decay-time-calculator.service";
import {LocalTimerStorageService} from "../shared/services/local-timer-storage.service";

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent {
  public timerConfigs: TimerConfig[] = [];

  constructor(private decayTimeCalculatorService: DecayTimeCalculatorService, private localTimerStorageService: LocalTimerStorageService) {
    const savedTimers = this.localTimerStorageService.getTimers();
    this.timerConfigs = savedTimers;
  }

  public deleteTimer(index: number): void {
    this.localTimerStorageService.deleteTimer(index);
    this.timerConfigs.splice(index, 1);
  }

  public onTimerFormSubmit(value: TimerFormValue): void {
    const timerConfig: TimerConfig = {
      startTime: this.decayTimeCalculatorService.calculateBuildingComponentDecayTimeInSeconds(value.health, value.buildingTier),
      label: value.label,
      x: value.x,
      y: value.y,
      notes: value.notes
    }

    this.localTimerStorageService.saveTimer(timerConfig);
    this.timerConfigs.push(timerConfig);
  }
}
