import {Component} from '@angular/core';
import {TimerFormValue} from "./timer-form/timer-form.component";
import {DecayTimeCalculatorService} from "../shared/decay-time-calculator.service";
import {TimerConfig} from "./timer/timer.component";

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent {
  public timerConfigs: TimerConfig[] = [];

  constructor(private decayTimeCalculatorService: DecayTimeCalculatorService) {
  }

  public deleteTimer(index: number): void {
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

    this.timerConfigs.push(timerConfig);
  }
}
