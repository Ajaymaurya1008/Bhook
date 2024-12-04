/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FoodCategory from '../components/FoodCategory';
import SpecialCard from '../components/SpecialCard';
import colors from 'tailwindcss/colors';
import {FlashList} from '@shopify/flash-list';
import {FoodItemType} from '../types/Recipe';
import {useSpecialFood} from '../hooks/useSpecialFood';
import {navigate} from '../navigation/NavigationService';

export default function Home() {
  const {data, isLoading, error} = useSpecialFood();

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

  const handleTotal = () => {
    navigate('Search');
  };

  return (
    <ScrollView contentContainerClassName="bg-neutral-100 px-6 pt-16 pb-40">
      <Text className="text-4xl font-bold">Hello {'\n'}Abhishek</Text>
      <Text className="text-xl text-neutral-600 mt-2 font-normal">
        What do you want to eat ?
      </Text>
      <TouchableOpacity onPress={handleTotal} className="mt-8 px-4 py-2 gap-1 bg-neutral-300 items-center rounded-lg flex-row">
        <Feather name="search" size={20} color="gray" />
        <Text className="text-lg font-semibold text-neutral-500">Search</Text>
      </TouchableOpacity>
      <FoodCategory />
      <View className="mt-8">
        <View className="w-full flex-row items-center">
          <Text className="text-3xl flex-1 font-bold">Today's Special</Text>
          <TouchableOpacity onPress={handleTotal}>
            <Text className="text-lg font-semibold text-orange-500">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlashList
          data={data?.recipes}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-4" />}
          horizontal={true}
          estimatedItemSize={200}
          renderItem={({item}: {item: FoodItemType}) => (
            <SpecialCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              ingredients={item.ingredients}
              caloriesPerServing={item.caloriesPerServing}
              rating={item.rating}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}
