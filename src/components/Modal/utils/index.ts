import type { GroceryProps } from '~/@types/Entity/Grocery';

export const removeProduct = (
  groceryList: GroceryProps[],
  categoryID: string,
  productID: string,
) => {
  const newList = groceryList;

  const indexCategory = newList.findIndex(
    currentCategory => currentCategory.id === categoryID,
  );

  const indexProduct = newList[indexCategory].listItems.findIndex(
    currentItem => currentItem.id === productID,
  );

  newList[indexCategory].listItems.splice(indexProduct, 1);
  return newList;
};
