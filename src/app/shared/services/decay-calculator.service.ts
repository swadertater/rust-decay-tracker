import { Injectable } from '@angular/core';
import {BuildingComponent, BuildingTier, Time} from "../types";

@Injectable({
  providedIn: 'root'
})
export class DecayCalculatorService {



  constructor() { }

  calculateDecay(health: number, buildingTier: BuildingTier, buildingComponent: BuildingComponent, tickRate: number): number {

  }
}
