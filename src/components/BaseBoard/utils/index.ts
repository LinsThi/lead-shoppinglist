import type { GroceryProps } from '~/@types/Entity/Grocery';

export const countAllItens = (groceryList: GroceryProps[]) => {
  let count = 0;
  const listCount = groceryList;

  listCount.map(categoryCurrent => {
    count += categoryCurrent.listItems.length;
    return null;
  });

  return count;
};

export const amountList = (groceryList: GroceryProps[]) => {
  let amount = 0;
  const listCount = groceryList;

  listCount.map(categoryCurrent => {
    categoryCurrent.listItems.map(itemsCurrent => {
      const value = itemsCurrent.price;
      const qnt = itemsCurrent.quantity;
      amount += parseInt(value, 10) * parseInt(qnt, 10);
      return null;
    });

    return null;
  });

  return amount;
};
