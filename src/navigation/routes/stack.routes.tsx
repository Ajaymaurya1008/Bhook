import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab.routes';
import Login from '../../screens/Login';
import {useAuthStore} from '../../store/authStore/store';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  const {sessionToken} = useAuthStore();

  return (
    <Stack.Navigator initialRouteName={sessionToken ? 'TabNavigator' : 'Login'}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
