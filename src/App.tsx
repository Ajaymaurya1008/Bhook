/* eslint-disable react/no-unstable-nested-components */
import './style/global.css';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Feather from 'react-native-vector-icons/Feather';
import colors from 'tailwindcss/colors';
import Search from './screens/Search';
import Favourites from './screens/Favourites';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60,
          paddingTop: 5,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="home" size={28} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="heart" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="search" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="user" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNaivgator">
          <Stack.Screen
            name="TabNaivgator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
