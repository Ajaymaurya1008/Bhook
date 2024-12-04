/* eslint-disable react/no-unstable-nested-components */
import {ActivityIndicator, View, Text} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import Header from '../components/search/Header';
import {FlashList} from '@shopify/flash-list';
import {FoodItemType} from '@/types/Recipe';
import FoodCard from '../components/search/FoodCard';
import {useFood} from '../hooks/useFood';
import colors from 'tailwindcss/colors';

export default function Search() {
  const {
    isLoading,
    infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
  } = useFood();

  const recipeData = useMemo(
    () => infiniteData?.pages.flatMap(page => page.recipes),
    [infiniteData?.pages],
  );

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color={colors.orange[500]} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text>Error loading data, please try again later</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Header />
      <View className="flex-1 w-full px-6 bg-neutral-200 pt-6">
        <FlashList
          data={recipeData}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          estimatedItemSize={100}
          onEndReachedThreshold={0.5}
          onEndReached={handleEndReached}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}: {item: FoodItemType}) => (
            <FoodCard
              id={item.id}
              name={item.name}
              image={item.image}
              ingredients={item.ingredients}
              caloriesPerServing={item.caloriesPerServing}
            />
          )}
          ListFooterComponent={() =>
            isFetchingNextPage ? (
              <View className="py-4">
                <ActivityIndicator />
              </View>
            ) : null
          }
        />
      </View>
    </View>
  );
}
