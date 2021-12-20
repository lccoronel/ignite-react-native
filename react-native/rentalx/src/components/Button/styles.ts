import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { IContainerProps, IButtonTextProps } from './types';

export const Container = styled(RectButton)<IContainerProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color || theme.colors.main};
  margin-bottom: 8px;
  opacity: ${({ enabled, loading }) => (!enabled || loading ? 0.5 : 1)};
`;

export const Title = styled.Text<IButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.shape};
`;
