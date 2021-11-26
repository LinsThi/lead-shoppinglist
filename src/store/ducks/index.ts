import { combineReducers } from 'redux';

import category from './category';
import grocery from './grocery';
import user from './user';

export default combineReducers({ user, grocery, category });
