import type { GroceryProps } from '~/@types/Entity/Grocery';
import type { ProductProps } from '~/@types/Entity/Product';

export const changeSelectedProduct = (
  groceryList: GroceryProps[],
  product: ProductProps,
) => {
  const newList = groceryList;
  newList.map(currentCategory => {
    currentCategory.listItems.map(currentItem => {
      if (currentItem.id === product.id) {
        const checked = !currentItem.isSelected;
        currentItem.isSelected = checked;
        return null;
      }
      return null;
    });
    return null;
  });

  return newList;
};
