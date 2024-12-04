import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginButtons({handleLogin}: {handleLogin: () => void}) {
  return (
    <View className="justify-center items-center">
      <TouchableOpacity
        onPress={handleLogin}
        className="py-3 px-10 bg-orange-500 justify-center items-center rounded-xl mt-4">
        <Text className="text-white text-center font-medium text-xl">
          LOG IN
        </Text>
      </TouchableOpacity>
      <Text className="mt-4">or connect using</Text>
      <View className="flex-row gap-4">
        <TouchableOpacity className="py-2 flex-row gap-2 px-4 justify-center items-center bg-orange-500 rounded-md mt-4">
          <AntDesign name="google" size={20} color="white" />
          <Text className="text-white text-center font-medium text-base">
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-2 flex-row gap-2 px-4 justify-center items-center bg-orange-500 rounded-md mt-4">
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text className="text-white text-center font-medium text-base">
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="mt-8 text-base">
        Don't have an account?{' '}
        <Text className="text-orange-500 font-semibold">Sign Up</Text>{' '}
      </Text>
    </View>
  );
}
