import React from 'react';
import { SvgProps } from 'react-native-svg';

export interface IAccessory {
  name: string;
  icon: React.FC<SvgProps>;
}
