import { useContext } from 'react';
import { AuthContext } from './auth';
import { IAuthContextData } from './types';

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}
