import { action } from 'typesafe-actions';

import type { LoginActionProps } from './types';
import { UserTypes } from './types';

export const loginAction = (
  username: string,
  password: string,
): LoginActionProps => action(UserTypes.USER_LOGIN, { username, password });
