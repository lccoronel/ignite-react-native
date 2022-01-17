/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '.';

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => ({
      type: 'success',
      user: {
        id: 'any email',
        name: 'lucas.coronel@gmail.com',
        email: 'Lucas',
        photo: 'any_photo.png',
      },
    }),
  };
});

describe('Auth Hook', () => {
  it('should be able to sign in with google account existing', async () => {
    // const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });
    // await act(() => result.current.signInWithGoogle());
  });
});
