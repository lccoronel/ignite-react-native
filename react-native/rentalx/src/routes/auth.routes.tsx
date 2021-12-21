import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Confirmation } from '../screens/Confirmation';
import { Splash } from '../screens/Splash';
import { Signin } from '../screens/Signin';
import { FisrtStep } from '../screens/Signup/FirstStep';
import { SecondStep } from '../screens/Signup/SecondStep';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Signin" component={Signin} />
      <Screen name="FirstStep" component={FisrtStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
};
