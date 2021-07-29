import { ReactNode } from 'react';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

export interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

export interface AuthorizathionResponse {
  params: {
    access_token: string;
  };
  type: string;
}
