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

  private buildingTierDecayTimeInSecondsMap = new Map<BuildingTier, number>([
    [BuildingTier.Twig, 3600],
    [BuildingTier.Wood, 10800],
    [BuildingTier.Stone, 18000],
    [BuildingTier.SheetMetal, 28800],
    [BuildingTier.Armoured, 43200]
  ]);

  public calculateBuildingComponentDecayTimeInSeconds(health: number, buildingTier: BuildingTier): number  {
      const maxHealth = this.buildingTierMaxHealthMap.get(buildingTier);
      const decayTimeInSeconds = this.buildingTierDecayTimeInSecondsMap.get(buildingTier);
      const decayTimePerHealth = decayTimeInSeconds / maxHealth;
      return decayTimePerHealth * health;
    }
}
