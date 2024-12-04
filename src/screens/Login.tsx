import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View className="flex-1 bg-neutral-100 items-center justify-center px-4">
      <View className="gap-2">
        <Text className="text-center text-4xl font-bold">Welcome Back</Text>
        <Text className="text-center font-normal">
          Login to your existant account
        </Text>
      </View>
      <View className="w-full px-8">
        <TextInput
          placeholder="Username"
          className="mt-4 w-full placeholder:font-medium placeholder:text-neutral-400 rounded-xl px-4 py-5 bg-white"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          className="mt-4 w-full placeholder:font-medium placeholder:text-neutral-400 rounded-xl px-4 py-5 bg-white"
        />
      </View>
      <Text className="mt-4 text-sm font-semibold text-orange-500 text-right px-8 w-full">
        Forgot password?
      </Text>
      <TouchableOpacity className="py-3 px-10 bg-orange-500 justify-center items-center rounded-xl mt-4">
        <Text className="text-white text-center font-medium text-xl">
          LOG IN
        </Text>
      </TouchableOpacity>
      <Text className="mt-4">or connect using</Text>
      <View className="flex-row gap-4">
        <TouchableOpacity className="py-2 px-4 justify-center items-center bg-orange-500 rounded-md mt-4">
          <Text className="text-white text-center font-medium text-base">
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-2 px-4 justify-center items-center bg-orange-500 rounded-md mt-4">
          <Text className="text-white text-center font-medium text-base">
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="mt-8 text-base">
        Don't have an account? <Text className="text-orange-500 font-semibold">Sign Up</Text>{' '}
      </Text>
    </View>
  );
}
