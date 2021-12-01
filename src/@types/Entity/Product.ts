import type { CategoryProps } from './Category';

export interface ProductProps {
  id: string;
  image: string;
  name: string;
  quantity: string;
  unity: string;
  price: string;
  category: CategoryProps;
  isSelected: boolean;
}
