import { action } from 'typesafe-actions';

import type { GroceryProps } from '~/@types/Entity/Grocery';

import type { InsertItemAction } from './types';
import { GroceryTypes } from './types';

export const insertItemAction = (
  groceryList: GroceryProps[],
): InsertItemAction => action(GroceryTypes.INSERT_ITEM, { groceryList });
