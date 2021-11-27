import { action } from 'typesafe-actions';

import type { CategoryProps } from '~/@types/Entity/Category';

import type { InsertCategoryAction } from './types';
import { CategoryTypes } from './types';

export const insertCategory = (
  groceryCategory: CategoryProps[],
): InsertCategoryAction =>
  action(CategoryTypes.INSERT_CATEGORY, { groceryCategory });
