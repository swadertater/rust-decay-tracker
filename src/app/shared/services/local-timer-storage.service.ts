import {Injectable} from '@angular/core';
import {TimerConfig} from "../../timers/timer/timer.component";

@Injectable({
  providedIn: 'root'
})
export class LocalTimerStorageService {
  constructor() {
  }

  public getTimers(): TimerConfig[] {
    const timerConfigsJson = localStorage.getItem('timers');
    if (timerConfigsJson) {
      const savedTimerConfigs = JSON.parse(timerConfigsJson);
      const savedTimersAreValid = this.validateTimerConfigs(savedTimerConfigs)
      if (!savedTimersAreValid) {
        this.clearTimers();
        return [];
      }
      return JSON.parse(timerConfigsJson).map((configJson: any) => Object.assign({} as TimerConfig, configJson));
    }
    return [];
  }

  public saveTimer(timer: TimerConfig): void {
    console.log('Saving timer: ', timer);
    const savedTimers = this.getTimers();
    savedTimers.push(timer);
    localStorage.setItem('timers', JSON.stringify(savedTimers));
  }

  public deleteTimer(index): void {
    const savedTimers = this.getTimers();
    savedTimers.splice(index, 1);
    localStorage.setItem('timers', JSON.stringify(savedTimers));
  }

  public clearTimers(): void {
    localStorage.removeItem('timers');
  }

  private validateTimerConfigs(timerConfigs: any[]): boolean {
    if (!timerConfigs || !Array.isArray(timerConfigs)) {
      return false;
    }
    return timerConfigs.every((timerConfig: any) => this.validateTimerConfig(timerConfig));
  }

  private validateTimerConfig(timerConfig: any): boolean {
    if (!timerConfig || typeof timerConfig !== 'object') {
      return false;
    }
    if (typeof timerConfig.startTime !== 'number') {
      return false;
    }
    if (typeof timerConfig.label !== 'string') {
      return false;
    }
    if (typeof timerConfig.x !== 'string') {
      return false;
    }
    if (typeof timerConfig.y !== 'string') {
      return false;
    }
    if (typeof timerConfig.notes !== 'string') {
      return false;
    }
    return true;
  }


}
