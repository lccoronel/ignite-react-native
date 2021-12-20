import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

const sizeImage = 6;
export const Container = styled.View<Props>`
  width: ${sizeImage}px;
  height: ${sizeImage}px;
  background-color: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.shape)};
  margin-left: 8px;
  border-radius: 3px;
`;
