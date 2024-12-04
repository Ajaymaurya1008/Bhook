import {KeyEnums} from '../types/KeyEnums';
import {SpecialFoodItemRequestType} from '../types/Recipe';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const useSpecialFood = () => {
  const getSpecialRecipes = async (): Promise<SpecialFoodItemRequestType> => {
    const res = await axios.get('https://dummyjson.com/recipes?limit=10');
    return res.data;
  };

  const {data, isLoading, error} = useQuery({
    queryKey: [KeyEnums.SPECIAL_FOOD],
    queryFn: getSpecialRecipes,
  });

  return {
    data,
    isLoading,
    error,
  };
};
