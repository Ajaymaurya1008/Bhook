import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {FoodItemType} from '../../types/Recipe';

export default memo(function FoodCard(props: FoodItemType) {
  const {name, image, ingredients, caloriesPerServing} = props;
  return (
    <TouchableOpacity className="bg-white rounded-xl p-4 gap-2 flex-row w-full">
      <Image source={{uri: image}} className="size-20 rounded-lg" />
      <View className="flex-1 gap-1">
        <Text numberOfLines={1} className="text-xl font-bold">
          {name}
        </Text>
        <Text numberOfLines={1} className="text-sm text-neutral-500">
          {ingredients.slice(0, 3).join(', ')}
        </Text>
        <View className="flex-row gap-2 justify-between items-center">
          <Text className="text-base font-semibold">
            Rs. {caloriesPerServing}
          </Text>
          <View className="bg-orange-500 rounded px-2 py-1">
            <Text className="text-sm font-medium text-white">Buy Now</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});
