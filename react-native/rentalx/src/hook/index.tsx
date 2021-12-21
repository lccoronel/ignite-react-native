import React from 'react';

import { AuthProvider } from './auth/auth';

export const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
