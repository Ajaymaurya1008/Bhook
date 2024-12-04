import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { foodCategoryData } from '../../utils/foodCategoryData';

export default function FoodCategory() {
  return (
    <View>
      <FlatList
        className="mt-8"
        data={foodCategoryData}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Separator}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              key={item.id}
              className="size-20 justify-center rounded-lg bg-orange-500 items-center">
              <Ionicons size={50} name={item.icon} color="white" />
            </TouchableOpacity>
            <Text className="text-center font-medium mt-1 ">{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const Separator = () => <View className="w-4" />;
