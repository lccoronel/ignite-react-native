import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Mycars from '../screens/Mycars';
import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={AppStackRoutes} />
      <Screen name="Profile" component={Home} />
      <Screen name="MyCars" component={Mycars} />
    </Navigator>
  );
};
