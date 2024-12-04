import {View, Text, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FoodItemType } from '@/types/Recipe';

export default function SpecialCard(props: FoodItemType) {
  const {name, image, ingredients, caloriesPerServing, rating} = props;
  return (
    <View className="bg-white rounded-b-lg w-60 mt-4">
      <Image
        className="w-60 h-40 rounded-t-lg"
        resizeMethod="scale"
        resizeMode="cover"
        source={{uri: image}}
      />
      <View className="p-2 gap-1 rounded-b-lg">
        <Text numberOfLines={1} className="text-xl font-semibold">
          {name}
        </Text>
        <Text numberOfLines={1}>{ingredients.slice(0, 3).join(', ')}</Text>
      </View>
      <View className="flex-row px-3 pb-3 items-center justify-between">
        <Text className="text-lg font-semibold">Rs. {caloriesPerServing}</Text>
        <View className="flex-row items-center gap-1 bg-orange-500 rounded-lg px-4 py-1">
          <Text className="text-white font-medium">{rating}</Text>
          <AntDesign name="staro" size={20} color="white" />
        </View>
      </View>
    </View>
  );
}
