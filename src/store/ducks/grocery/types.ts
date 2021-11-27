import type { Action } from 'redux';

import type { GroceryProps } from '~/@types/Entity/Grocery';

export enum GroceryTypes {
  INSERT_ITEM = '@grocery/INSERT_ITEM',
  INSERT_CATEGORY_IN_LIST = '@grocery/INSERT_CATEGORY_IN_LIST',
}

export interface GroceryState {
  groceryList: GroceryProps[];
}

export interface InsertItemAction extends Action {
  type: GroceryTypes.INSERT_ITEM;
  payload: { groceryList: GroceryProps[] };
}

export interface InsertCategoryInListAction extends Action {
  type: GroceryTypes.INSERT_CATEGORY_IN_LIST;
  payload: { groceryList: GroceryProps[] };
}
