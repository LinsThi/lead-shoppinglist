import { v4 as uuid } from 'uuid';

import type { CategoryProps } from '~/@types/Entity/Category';
import type { GroceryProps } from '~/@types/Entity/Grocery';

export const addCategory = (
  groceryCategory: CategoryProps[],
  category: string,
  groceryList: GroceryProps[],
) => {
  const newListCategory = groceryCategory;
  const newCategory: CategoryProps = {
    id: uuid(),
    name: category,
  };
  newListCategory.push(newCategory);

  return newListCategory;
};

export const insertCategoryInList = (
  groceryCategory: CategoryProps[],
  groceryList: GroceryProps[],
) => {
  const lastCategory = groceryCategory[groceryCategory.length - 1];
  const newList = groceryList;

  const addListCategory: GroceryProps = {
    id: lastCategory.id,
    name: lastCategory.name,
    listItems: [],
  };
  newList.push(addListCategory);
  return newList;
};
