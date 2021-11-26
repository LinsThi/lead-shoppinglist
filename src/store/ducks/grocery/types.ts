import type { Action } from 'redux';

import type { GroceryProps } from '~/@types/Entity/Grocery';

export enum GroceryTypes {
  INSERT_ITEM = '@grocery/INSERT_ITEM',
}

export interface GroceryState {
  groceryList: GroceryProps[];
}

export interface InsertItemAction extends Action {
  type: GroceryTypes.INSERT_ITEM;
  payload: { groceryList: GroceryProps[] };
}
