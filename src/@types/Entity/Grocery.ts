import type { ProductProps } from './Product';

export interface GroceryProps {
  id: string;
  name: string;
  listItems: ProductProps[] | [];
}
