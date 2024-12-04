export type FoodItemType = {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  caloriesPerServing: number;
  rating?: number;
};


export type FoodCategoryType = {
  id: number;
  name: string;
  icon: string;
};
