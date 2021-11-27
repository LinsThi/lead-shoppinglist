import type { CategoryState } from '~/store/ducks/category/types';
import type { GroceryState } from '~/store/ducks/grocery/types';
import type { UserState } from '~/store/ducks/user/types';

export interface AplicationState {
  user: UserState;
  grocery: GroceryState;
  category: CategoryState;
}
