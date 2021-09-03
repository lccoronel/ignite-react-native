import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import Schedulling from '../screens/Schedulling';
import SchedullingDetails from '../screens/SchedullingDetails';
import SchedullingComplete from '../screens/SchedullingComplete';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetais" component={CarDetails} />
      <Screen name="Schedulling" component={Schedulling} />
      <Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Screen name="SchedullingComplete" component={SchedullingComplete} />
    </Navigator>
  );
};

export default StackRoutes;
