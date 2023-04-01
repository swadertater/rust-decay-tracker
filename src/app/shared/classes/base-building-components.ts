import {BuildingTier} from "../types";

export abstract class BaseBuildingComponents {
  name: string;
  buildingTier: BuildingTier;
  maxHealth: number;
}
