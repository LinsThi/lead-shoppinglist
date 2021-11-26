import type { Reducer } from 'redux';

import { CATEGORIES } from '~/constants/grocery';

import type { CategoryState } from './types';
import { CategoryTypes } from './types';

const INITIAL_STATE: CategoryState = {
  groceryList: CATEGORIES,
};

const reducer: Reducer<CategoryState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoryTypes.INSERT_CATEGORY:
      return {
        ...state,
        groceryList: payload.groceryList,
      };
    default:
      return state;
  }
};

export default reducer;
