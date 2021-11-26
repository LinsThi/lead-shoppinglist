import type { CategoryProps } from '~/@types/Entity/Category';

export enum CategoryTypes {
  INSERT_CATEGORY = '@category/INSERT_CATEGORY',
}

export interface CategoryState {
  groceryList: CategoryProps[];
}
