import {KeyEnums} from '../types/KeyEnums';
import {AllFoodItemRequestType} from '../types/Request';
import {useInfiniteQuery} from '@tanstack/react-query';
import axios from 'axios';

export const useFood = () => {
  const getAllRecipes = async ({
    pageParam = 0,
  }): Promise<AllFoodItemRequestType> => {
    const res = await axios.get(
      `https://dummyjson.com/recipes?limit=10&skip=${pageParam * 10}`,
    );
    return {
      ...res.data,
      nextCursor: pageParam + 1,
      prevCursor: pageParam > 0 ? pageParam - 1 : undefined,
    };
  };

  const {
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data: infiniteData,
    error,
    ...result
  } = useInfiniteQuery({
    queryKey: [KeyEnums.ALL_FOOD],
    queryFn: getAllRecipes,
    initialPageParam: 0,
    getNextPageParam: lastPage =>
      lastPage.total > lastPage.skip + lastPage.limit
        ? lastPage.nextCursor
        : undefined,
  });

  return {
    isLoading,
    infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    ...result,
  };
};
