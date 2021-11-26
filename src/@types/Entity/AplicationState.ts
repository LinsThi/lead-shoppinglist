import type { GroceryState } from '~/store/ducks/grocery/types';
import type { UserState } from '~/store/ducks/user/types';

export interface AplicationState {
  user: UserState;
  grocery: GroceryState;
}
