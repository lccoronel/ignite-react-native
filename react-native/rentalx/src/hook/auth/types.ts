export interface IUser {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

export interface ISigninCredentials {
  email: string;
  password: string;
}

export interface IAuthContextData {
  user: IUser;
  loading: boolean;
  signIn: (credentials: ISigninCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser(user: IUser): Promise<void>;
}
