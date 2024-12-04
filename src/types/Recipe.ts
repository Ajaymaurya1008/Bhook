export type FoodItemType = {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  caloriesPerServing: number;
  rating: number;
};

export type SpecialFoodItemRequestType = {
  recipes: FoodItemType[];
  total: number;
  skip: number;
  limit: number;
};
