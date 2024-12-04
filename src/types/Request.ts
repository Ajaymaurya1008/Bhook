import {FoodItemType} from './Recipe';

export type SpecialFoodItemRequestType = {
  recipes: FoodItemType[];
  total: number;
  skip: number;
  limit: number;
};
