import React from 'react';

import { CheckBox } from '~/components/CheckBox';
import { FilterBar } from '~/components/FilterBar';

import { listCategory } from './mock';

import * as S from './styles';

export function Home() {
  function renderProduct({ item }: any) {
    return (
      <S.ContainerProduct>
        <S.ProductImg source={item.product_url} />
        <S.ContainerProductInfo>
          <S.ProductText>{item.name}</S.ProductText>
          <S.ProductUnity>{item.unity} un</S.ProductUnity>
        </S.ContainerProductInfo>

        <CheckBox />
      </S.ContainerProduct>
    );
  }

  function renderCategory({ item }: any) {
    return (
      <S.ContainerCategory>
        <S.CategoryText>{item.name}</S.CategoryText>

        <S.ListProduct
          data={item.listItens}
          extraData={item.listItens}
          keyExtractor={(itemCurrent, index) => String(index)}
          renderItem={renderProduct}
        />
      </S.ContainerCategory>
    );
  }

  return (
    <S.Container>
      <S.ContainerFilter>
        <FilterBar />
      </S.ContainerFilter>
      <S.ListCategory
        data={listCategory}
        extraData={listCategory}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderCategory}
      />
    </S.Container>
  );
}
