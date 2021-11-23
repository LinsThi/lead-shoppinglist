import type { Action } from 'redux';

export enum UserTypes {
  USER_LOGIN = '@user/USER_LOGIN',
}

export interface UserState {
  username: string;
  password: string;
}

export interface LoginActionProps extends Action {
  type: UserTypes.USER_LOGIN;
  payload: { username: string; password: string };
}
