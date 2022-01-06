/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useEffect } from 'react';

import { database } from '../../database';
import { User as ModelUser } from '../../database/models/user';
import api from '../../services/api';
import { IAuthContextData, IUser, ISigninCredentials } from './types';

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userCollection = database.get<ModelUser>('users');
    userCollection
      .query()
      .fetch()
      .then(response => {
        if (response.length) {
          const userData = response[0]._raw as unknown as IUser;
          api.defaults.headers!.authorization = `Bearer ${userData.token}`;
          setData(userData);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  async function signIn({ email, password }: ISigninCredentials) {
    try {
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data as any;
      api.defaults.headers!.authorization = `Bearer ${user.token}`;

      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        await userCollection.create(newUser => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = token;
        });
      });

      setData({ ...user, token });
    } catch (error) {
      throw new Error('erro');
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as IUser);
    } catch (error) {
      throw new Error('error');
    }
  }

  async function updateUser(user: IUser) {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.update(userData => {
          userData.name = user.name;
          userData.driver_license = user.driver_license;
          userData.avatar = user.avatar;
        });
      });

      setData(user);
    } catch (error) {
      console.log(error);

      throw new Error('error');
    }
  }

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut, updateUser, loading }}>{children}</AuthContext.Provider>
  );
};
