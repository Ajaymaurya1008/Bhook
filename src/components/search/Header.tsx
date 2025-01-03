import {View,TextInput} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

interface HeaderProps {
  searchText: string;
  onSearch: (text: string) => void;
}

export default function Header(props: HeaderProps) {
  const {searchText, onSearch} = props;

  return (
    <View className="bg-orange-600 border-slate-300 w-full px-8 pt-6 pb-4">
      <View className="px-2 gap-1 bg-white justify-center items-center rounded-lg flex-row">
        <Feather name="search" size={20} color="gray" />
        <TextInput
          value={searchText}
          onChangeText={onSearch}
          placeholder="Search Food"
          className="flex-1 text-black placeholder:text-lg placeholder:font-medium placeholder:text-neutral-600"
        />
      </View>
    </View>
  );
}
