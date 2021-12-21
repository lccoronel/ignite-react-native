import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import Schedulling from '../screens/Schedulling';
import SchedullingDetails from '../screens/SchedullingDetails';
import { Confirmation } from '../screens/Confirmation';
import Mycars from '../screens/Mycars';

const { Navigator, Screen } = createStackNavigator();

export const AppStackRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedulling" component={Schedulling} />
      <Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={Mycars} />
    </Navigator>
  );
};
