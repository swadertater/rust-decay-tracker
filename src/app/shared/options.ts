import {BuildingComponent, BuildingTier, Options} from './types';

export const X_OPTIONS: Options<string> = [
  {value: 'A', label: 'A'},
  {value: 'B', label: 'B'},
  {value: 'C', label: 'C'},
  {value: 'D', label: 'D'},
  {value: 'E', label: 'E'},
  {value: 'F', label: 'F'},
  {value: 'G', label: 'G'},
  {value: 'H', label: 'H'},
  {value: 'I', label: 'I'},
  {value: 'J', label: 'J'},
  {value: 'K', label: 'K'},
  {value: 'L', label: 'L'},
  {value: 'M', label: 'M'},
  {value: 'N', label: 'N'},
  {value: 'O', label: 'O'},
  {value: 'P', label: 'P'},
  {value: 'Q', label: 'Q'},
  {value: 'R', label: 'R'},
  {value: 'S', label: 'S'},
  {value: 'T', label: 'T'},
  {value: 'U', label: 'U'},
  {value: 'V', label: 'V'},
  {value: 'W', label: 'W'},
  {value: 'X', label: 'X'},
];

export const Y_OPTIONS: Options<string> = [
  {value: '0', label: '0'},
  {value: '1', label: '1'},
  {value: '2', label: '2'},
  {value: '3', label: '3'},
  {value: '4', label: '4'},
  {value: '5', label: '5'},
  {value: '6', label: '6'},
  {value: '7', label: '7'},
  {value: '8', label: '8'},
  {value: '9', label: '9'},
  {value: '10', label: '10'},
  {value: '11', label: '11'},
  {value: '12', label: '12'},
  {value: '13', label: '13'},
  {value: '14', label: '14'},
  {value: '15', label: '15'},
  {value: '16', label: '16'},
  {value: '17', label: '17'},
  {value: '18', label: '18'},
  {value: '19', label: '19'},
  {value: '20', label: '20'},
  {value: '21', label: '21'},
  {value: '22', label: '22'},
  {value: '23', label: '23'},
];


export const BUILDING_TIER_OPTIONS: Options<BuildingTier> = [
  {value: BuildingTier.Twig, label: 'Twig'},
  {value: BuildingTier.Wood, label: 'Wood'},
  {value: BuildingTier.Stone, label: 'Stone'},
  {value: BuildingTier.SheetMetal, label: 'Metal'},
  {value: BuildingTier.Armoured, label: 'Armored'},
];

export const BUILDING_COMPONENT_OPTIONS: Options<BuildingComponent> = [
  {value: BuildingComponent.Wall, label: 'Wall'},
  {value: BuildingComponent.Ceiling, label: 'Ceiling'},
  {value: BuildingComponent.Foundation, label: 'Foundation'},
  {value: BuildingComponent.Stairs, label: 'Stairs'},
];

