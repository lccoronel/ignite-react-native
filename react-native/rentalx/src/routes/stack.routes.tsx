import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import Schedulling from '../screens/Schedulling';
import SchedullingDetails from '../screens/SchedullingDetails';
import SchedullingComplete from '../screens/SchedullingComplete';
import Mycars from '../screens/Mycars';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedulling" component={Schedulling} />
      <Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Screen name="SchedullingComplete" component={SchedullingComplete} />
      <Screen name="MyCars" component={Mycars} />
    </Navigator>
  );
};

export default StackRoutes;
