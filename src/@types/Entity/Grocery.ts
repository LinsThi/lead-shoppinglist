import type { ProductProps } from './Product';

export interface GroceryProps {
  id: number;
  name: string;
  listItems: ProductProps[] | [];
}
