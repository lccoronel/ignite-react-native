export interface IUser {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
}

export interface IAuthState {
  token: string;
  user: IUser;
}

export interface ISigninCredentials {
  email: string;
  password: string;
}

export interface IAuthContextData {
  user: IUser;
  signIn: (credentials: ISigninCredentials) => Promise<void>;
}
