import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserTypes } from './types';

const INITIAL_STATE: UserState = {
  username: '',
  password: '',
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default reducer;
