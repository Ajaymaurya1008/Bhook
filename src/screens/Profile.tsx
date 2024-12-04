import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuthStore} from '../store/authStore/store';
import {navigate} from '../navigation/NavigationService';

export default function Profile() {
  const {reset} = useAuthStore();

  const handleLogout = () => {
    reset();
    navigate('Login');
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
