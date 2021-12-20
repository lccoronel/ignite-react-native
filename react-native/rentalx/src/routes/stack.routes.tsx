import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import Schedulling from '../screens/Schedulling';
import SchedullingDetails from '../screens/SchedullingDetails';
import SchedullingComplete from '../screens/SchedullingComplete';
import Mycars from '../screens/Mycars';
import Splash from '../screens/Splash';
import { Signin } from '../screens/Signin';
import { FisrtStep } from '../screens/Signup/FirstStep';
import { SecondStep } from '../screens/Signup/SecondStep';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Signin">
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedulling" component={Schedulling} />
      <Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Screen name="SchedullingComplete" component={SchedullingComplete} />
      <Screen name="MyCars" component={Mycars} />
      <Screen name="Signin" component={Signin} />
      <Screen name="FirstStep" component={FisrtStep} />
      <Screen name="SecondStep" component={SecondStep} />
    </Navigator>
  );
};

export default StackRoutes;
