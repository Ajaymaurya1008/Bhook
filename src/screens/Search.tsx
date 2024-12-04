/* eslint-disable react/no-unstable-nested-components */
import {ActivityIndicator, View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {FlashList} from '@shopify/flash-list';
import {FoodItemType} from '@/types/Recipe';
import FoodCard from '../components/FoodCard';
import {useFood} from '../hooks/useFood';
import colors from 'tailwindcss/colors';

export default function Search() {
  const {data, isLoading, error} = useFood();

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
          data={data?.recipes}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          estimatedItemSize={100}
          renderItem={({item}: {item: FoodItemType}) => (
            <FoodCard
              id={item.id}
              name={item.name}
              image={item.image}
              ingredients={item.ingredients}
              caloriesPerServing={item.caloriesPerServing}
            />
          )}
        />
      </View>
    </View>
  );
}
