import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screen/Profile';

describe('Profile Screen', () => {
  it('check if show correctly button placeholder', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it('check if user data has been loaded', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Lucas');
    expect(inputSurname.props.value).toEqual('Coronel');
  });

  it('check if title render correctly', () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId('text-title');

    expect(textTitle.props.children).toContain('Perfil');
  });
});
