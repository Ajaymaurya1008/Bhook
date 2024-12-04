import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const foodCategories = [
  {
    id: 1,
    name: 'Lunch',
    icon: 'pizza-outline',
  },
  {
    id: 2,
    name: 'Dinner',
    icon: 'fast-food-outline',
  },
  {
    id: 3,
    name: 'Breakfast',
    icon: 'cafe-outline',
  },
  {
    id: 4,
    name: 'Snacks',
    icon: 'nutrition-outline',
  },
  {
    id: 5,
    name: 'Dessert',
    icon: 'ice-cream-outline',
  },
  {
    id: 6,
    name: 'Drinks',
    icon: 'beer-outline',
  },
];

export default function Home() {
  const getRecipes = async () => {
    const res = await axios.get('https://dummyjson.com/recipes');
    return res.data;
  };

  const {data} = useQuery({
    queryKey: ['RECIPES'],
    queryFn: getRecipes,
  });

  console.log(data);

  return (
    <View className="flex-1 bg-neutral-100 px-6 pt-16">
      <Text className="text-4xl font-bold">Hello {'\n'}Abhishek</Text>
      <Text className="text-xl text-neutral-600 mt-2 font-normal">
        What do you want to eat ?
      </Text>
      <View className="mt-8 px-4 gap-1 bg-neutral-300 justify-center items-center rounded-lg flex-row">
        <Feather name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search"
          className="flex-1 placeholder:text-lg placeholder:font-semibold placeholder:text-neutral-500"
        />
      </View>
      <FlatList
        className="mt-8 border"
        data={foodCategories}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <View className="border">
            <TouchableOpacity
              key={item.id}
              className="size-20 justify-center rounded-lg bg-orange-500 items-center">
              <Ionicons size={50} name={item.icon} color="white" />
            </TouchableOpacity>
            <Text className="text-center   border font-medium mt-1 ">{item.name}</Text>
          </View>
        )}
      />
      <View className="mt-6">
        <Text>Today's Special</Text>
      </View>
    </View>
  );
}

const Separator = () => <View className="w-4" />;
