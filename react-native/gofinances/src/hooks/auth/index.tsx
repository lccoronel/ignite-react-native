import React, { createContext, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useEffect } from 'react';
import {
  AuthContextData,
  AuthorizathionResponse,
  AuthProviderProps,
  User,
} from './types';

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setuserStorageLoading] = useState(true);

  const { CLIENT_ID } = process.env;
  const { REDIRECT_URI } = process.env;

  useEffect(() => {
    AsyncStorage.getItem('@gofinances:user').then(response => {
      if (response) {
        const userlogged = JSON.parse(response) as User;
        setUser(userlogged);
      }
    });
    setuserStorageLoading(false);
  }, []);

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const { type, params } = (await AuthSession.startAsync({
        authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`,
      })) as AuthorizathionResponse;

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`,
        );
        const userInfo = await response.json();

        if (userInfo) {
          const userLogged = {
            id: userInfo.id,
            email: userInfo.email,
            name: userInfo.given_name,
            photo: userInfo.picture,
          };

          setUser(userLogged);
          await AsyncStorage.setItem(
            '@gofinances:user',
            JSON.stringify(userLogged),
          );
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo: `https://ui-avatars.com/api/?name=${
            credential.fullName!.givenName
          }&length=1`,
        };

        setUser(userLogged);
        await AsyncStorage.setItem(
          '@gofinances:user',
          JSON.stringify(userLogged),
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem('@gofinances:user');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithApple,
        signOut,
        userStorageLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
