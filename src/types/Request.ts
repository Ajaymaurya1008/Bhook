import {FoodItemType} from './Recipe';

export type SpecialFoodItemRequestType = {
  recipes: FoodItemType[];
  total: number;
  skip: number;
  limit: number;
};


export type AllFoodItemRequestType = {
  recipes: FoodItemType[];
  total: number;
  skip: number;
  limit: number;
  nextCursor: number;
  prevCursor: number | undefined;
};
