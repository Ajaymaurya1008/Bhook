import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuthStore} from '../store/authStore/store';
import NavigationService from '../navigation/NavigationService';

export default function Profile() {
  const {reset: resetAuth} = useAuthStore();

  const handleLogout = () => {
    resetAuth();
    NavigationService.reset('Login');
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-orange-500 px-4 py-2 rounded-md">
        <Text className="text-white font-semibold text-xl">LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
