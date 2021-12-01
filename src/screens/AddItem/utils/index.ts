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
