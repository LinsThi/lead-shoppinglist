import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';

import type { CategoryProps } from '~/@types/Entity/Category';
import type { GroceryProps } from '~/@types/Entity/Grocery';
import type { ProductProps } from '~/@types/Entity/Product';

export const insertItem = (
  groceryList: GroceryProps[],
  image: string,
  name: string,
  quantity: string,
  unity: string,
  price: string,
  category: CategoryProps,
) => {
  const newList = groceryList;
  newList.map(categoryCurrent => {
    if (categoryCurrent.id === category.id) {
      const newItem: ProductProps = {
        id: uuid(),
        image,
        name,
        quantity,
        price: price || '0',
        unity,
        category,
        isSelected: false,
      };

      return categoryCurrent.listItems.push(newItem);
    }

    return null;
  });

  return newList;
};

export const updateItemInList = (
  groceryList: GroceryProps[],
  categoryID: string,
  productID: string,
  image: string,
  name: string,
  quantity: string,
  unity: string,
  price: string,
  category: CategoryProps,
) => {
  const newList = groceryList;

  const indexCategory = newList.findIndex(
    currentCategory => currentCategory.id === categoryID,
  );

  const indexProduct = newList[indexCategory].listItems.findIndex(
    currentProduct => currentProduct.id === productID,
  );

  if (category.id !== newList[indexCategory].id) {
    newList[indexCategory].listItems[indexProduct].image = image;
    newList[indexCategory].listItems[indexProduct].name = name;
    newList[indexCategory].listItems[indexProduct].quantity = quantity;
    newList[indexCategory].listItems[indexProduct].unity = unity;
    newList[indexCategory].listItems[indexProduct].price = price;
    newList[indexCategory].listItems[indexProduct].category = category;

    const product = newList[indexCategory].listItems[indexProduct];
    newList[indexCategory].listItems.splice(indexProduct, 1);

    const indexNewCategory = newList.findIndex(
      currentCategory => currentCategory.id === product.category.id,
    );

    newList[indexNewCategory].listItems.push(product);
  } else {
    newList[indexCategory].listItems[indexProduct].image = image;
    newList[indexCategory].listItems[indexProduct].name = name;
    newList[indexCategory].listItems[indexProduct].quantity = quantity;
    newList[indexCategory].listItems[indexProduct].unity = unity;
    newList[indexCategory].listItems[indexProduct].price = price;
    newList[indexCategory].listItems[indexProduct].category = category;
  }

  return newList;
};
