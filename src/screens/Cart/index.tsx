import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { BaseBoard } from '~/components/BaseBoard';
import { CancelProduct } from '~/components/CancelProduct';
import FilterBar from '~/components/FilterBar';

import { listCategory } from './mock';

import * as S from './styles';

export function Cart({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: Colors.WHITE,
      title: 'Carrinho',
    });
  }, [navigation, Colors]);

  function renderProduct({ item }: any) {
    if (item.name.includes(filter)) {
      return (
        <S.ContainerProduct>
          <S.ProductImg source={{ uri: item.product_url }} />
          <S.ContainerProductInfo>
            <S.ProductText>{item.name}</S.ProductText>
            <S.ProductUnity>{item.unity} un</S.ProductUnity>
          </S.ContainerProductInfo>

          <CancelProduct />
        </S.ContainerProduct>
      );
    }
  }

  function renderCategory({ item }: any) {
    return (
      <S.ContainerCategory>
        <S.CategoryText>{item.name}</S.CategoryText>

        <S.ListProduct
          data={item.listItens}
          extraData={item.listItens}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderProduct}
        />
      </S.ContainerCategory>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={false}
    >
      <S.Container>
        <S.ContainerFilter>
          <FilterBar
            iconLeft="search"
            iconType="font-5"
            placeholder="Buscar Produtos"
            value={filter}
            onChangeText={setFilter}
          />
        </S.ContainerFilter>
        <S.ListCategory
          data={listCategory}
          extraData={listCategory}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderCategory}
        />

        <S.ContainerBase>
          <BaseBoard name="md-cart" type="ionicons" />
        </S.ContainerBase>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
