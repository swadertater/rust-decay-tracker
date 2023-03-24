import { Component } from '@angular/core';
import {BuildingComponent, BuildingTier, Options} from '../shared/types';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent {
  public timers: TimerData[] = [];

  public buildingTierOptions: Options<BuildingTier> = [
    {value: BuildingTier.Wood, label: 'Wood'},
    {value: BuildingTier.Stone, label: 'Stone'},
    {value: BuildingTier.SheetMetal, label: 'Metal'},
    {value: BuildingTier.Armored, label: 'Armored'},
  ];

  public buildingComponentOptions: Options<BuildingComponent> = [
    {value: BuildingComponent.Wall, label: 'Wall'},
    {value: BuildingComponent.Ceiling, label: 'Ceiling'},
    {value: BuildingComponent.Foundation, label: 'Foundation'},
    {value: BuildingComponent.Stairs, label: 'Stairs'},
  ];

  constructor(private fb: FormBuilder){

  }

  public addTimer() {
    this.timers.push({id: this.timers.length + 1});
  }

  public deleteTimer(id: number): void {
    this.timers = this.timers.filter(timer => timer.id !== id);
  }

  onSubmit($event: SubmitEvent) {
    console.log('EVENT: ', $event)
  }
}

export interface TimerData {
  id: number;
}
