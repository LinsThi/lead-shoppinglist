import { action } from 'typesafe-actions';

import type { GroceryProps } from '~/@types/Entity/Grocery';

import type { InsertCategoryInListAction, InsertItemAction } from './types';
import { GroceryTypes } from './types';

export const insertItemAction = (
  groceryList: GroceryProps[],
): InsertItemAction => action(GroceryTypes.INSERT_ITEM, { groceryList });

export const insertCategoryInListAction = (
  groceryList: GroceryProps[],
): InsertCategoryInListAction =>
  action(GroceryTypes.INSERT_CATEGORY_IN_LIST, { groceryList });
