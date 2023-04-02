export type Option<T> = {
  value: T;
  label: string;
}

export type Options<T> = Option<T>[];

export enum BuildingTier {
  Twig,
  Wood,
  Stone,
  SheetMetal,
  Armoured
}

export enum BuildingComponent {
  Wall,
  Ceiling,
  Foundation,
  Stairs
}

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}
