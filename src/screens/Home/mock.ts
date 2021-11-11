import type { CategoryProps } from '~/@types/Entity/Category';

import acerolaImg from '../../assets/acerola.jpeg';
import carneImg from '../../assets/carne.jpg';
import detergenteImg from '../../assets/detergente.jpeg';
import frangoImg from '../../assets/frango.jpg';
import mamaoImg from '../../assets/mamao.jpeg';
import sabaoImg from '../../assets/sabao.png';

export const listCategory: CategoryProps[] = [
  {
    id: 1,
    name: 'Limpeza',
    listItens: [
      { id: 1, name: 'Detergente', unity: 3, product_url: `${detergenteImg}` },
      { id: 2, name: 'Sabão', unity: 3, product_url: `${sabaoImg}` },
    ],
  },
  {
    id: 2,
    name: 'Carnes',
    listItens: [
      { id: 1, name: 'Picanha', unity: 3, product_url: `${carneImg}` },
      { id: 2, name: 'Frango', unity: 3, product_url: `${frangoImg}` },
    ],
  },
  {
    id: 3,
    name: 'Frutas',
    listItens: [
      { id: 1, name: 'Mamão', unity: 3, product_url: `${mamaoImg}` },
      { id: 2, name: 'Acerola', unity: 3, product_url: `${acerolaImg}` },
    ],
  },
];
