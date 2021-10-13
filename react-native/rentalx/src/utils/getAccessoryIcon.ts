import React from 'react';
import { SvgProps } from 'react-native-svg';

import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import ForceSvg from '../assets/force.svg';
import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import ExchangeSvg from '../assets/exchange.svg';
import PeopleSvg from '../assets/people.svg';
import HybridSvg from '../assets/hybrid.svg';
import CarSVg from '../assets/car.svg';

export function getAccessoryIcon(type: string): React.FC<SvgProps> {
  switch (type) {
    case 'spped':
      return SpeedSvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'electric_motor':
      return EnergySvg;
    case 'exchange':
      return ExchangeSvg;
    case 'seats':
      return PeopleSvg;
    case 'hybrid_motor':
      return HybridSvg;
    default:
      return CarSVg;
  }
}
