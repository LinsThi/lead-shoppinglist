import type { Reducer } from 'redux';

import { CATEGORIES } from '~/constants/grocery';

import type { CategoryState } from './types';
import { CategoryTypes } from './types';

const INITIAL_STATE: CategoryState = {
  groceryCategory: CATEGORIES,
};

const reducer: Reducer<CategoryState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoryTypes.INSERT_CATEGORY:
      return {
        ...state,
        groceryCategory: payload.groceryCategory,
      };
    default:
      return state;
  }
};

export default reducer;
