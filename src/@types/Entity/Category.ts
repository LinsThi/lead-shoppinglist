import type { ProductProps } from './Produc';

export interface CategoryProps {
  id: number;
  name: string;
  listItens: ProductProps[];
}
