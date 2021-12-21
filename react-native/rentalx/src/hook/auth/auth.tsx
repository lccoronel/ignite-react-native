import React, { createContext, useState } from 'react';

import api from '../../services/api';
import { IAuthContextData, IAuthState, ISigninCredentials } from './types';

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setDate] = useState<IAuthState>({} as IAuthState);

  async function signIn({ email, password }: ISigninCredentials) {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data as unknown as IAuthState;
    setDate({ token, user });

    api.defaults.headers!.authorization = `Bearer ${token}`;
  }

  return <AuthContext.Provider value={{ user: data.user, signIn }}>{children}</AuthContext.Provider>;
};
