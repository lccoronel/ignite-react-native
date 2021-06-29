import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => (
    type === 'total' ? theme.colors.secondary : theme.colors.shape
  )};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => (
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  )};
`;

const iconColors = {
  up: theme.colors.success,
  down: theme.colors.attention,
  total: theme.colors.shape
};

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  color: ${({ type }) => iconColors[type]};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) => (
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  )};
  margin-top: 20px;
`;

export const LastTransactions = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => (
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  )};
`;
