import { Injectable } from '@angular/core';
import {BuildingTier} from "../types";

@Injectable({
  providedIn: 'root'
})
export class DecayTimeCalculatorService {

  private buildingTierMaxHealthMap = new Map<BuildingTier, number>([
    [BuildingTier.Twig, 100],
    [BuildingTier.Wood, 200],
    [BuildingTier.Stone, 400],
    [BuildingTier.SheetMetal, 800],
    [BuildingTier.Armoured, 1600]
  ]);

  private buildingTierDecayTimeMap = new Map<BuildingTier, number>([
    [BuildingTier.Twig, 3600000],
    [BuildingTier.Wood, 10800000],
    [BuildingTier.Stone, 18000000],
    [BuildingTier.SheetMetal, 28800000],
    [BuildingTier.Armoured, 43200000]
  ]);

  public calculateBuildingComponentDecayTime(health: number, buildingTier: BuildingTier): number  {
      const maxHealth = this.buildingTierMaxHealthMap.get(buildingTier);
      const decayTimeInSeconds = this.buildingTierDecayTimeMap.get(buildingTier);
      const decayTimePerHealth = decayTimeInSeconds / maxHealth;
      return decayTimePerHealth * health;
    }
}
