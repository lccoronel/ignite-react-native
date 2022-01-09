import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Mycars } from '../screens/Mycars';
import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: colors.background_primary,
        },
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.text_detail,
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{ tabBarIcon: ({ color }) => <HomeSvg width={24} height={24} fill={color} /> }}
      />
      <Screen
        name="MyCars"
        component={Mycars}
        options={{ tabBarIcon: ({ color }) => <CarSvg width={24} height={24} fill={color} /> }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: ({ color }) => <PeopleSvg width={24} height={24} fill={color} /> }}
      />
    </Navigator>
  );
};
