import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { IImageIndex } from './types';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

const sizeImage = 6;
export const ImageIndex = styled.View<IImageIndex>`
  width: ${sizeImage}px;
  height: ${sizeImage}px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWraooer = styled.View`
  width: ${width}px;
  height: 132px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 200px;
  height: 132px;
`;
