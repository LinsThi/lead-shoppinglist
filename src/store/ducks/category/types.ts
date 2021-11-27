import type { Action } from 'redux';

import type { CategoryProps } from '~/@types/Entity/Category';

export enum CategoryTypes {
  INSERT_CATEGORY = '@category/INSERT_CATEGORY',
}

export interface CategoryState {
  groceryCategory: CategoryProps[];
}

export interface InsertCategoryAction extends Action {
  type: CategoryTypes.INSERT_CATEGORY;
  payload: { groceryCategory: CategoryProps[] };
}
