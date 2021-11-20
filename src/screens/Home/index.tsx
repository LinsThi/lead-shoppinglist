import React, { useCallback, useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { ThemeContext } from 'styled-components/native';

import { BaseBoard } from '~/components/BaseBoard';
import { CheckBox } from '~/components/CheckBox';
import FilterBar from '~/components/FilterBar';

import { CART_SCREEN, ITEM_SCREEN } from '~/constants/routes';

import { listCategory } from './mock';

import * as S from './styles';

export function Home({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  const [filter, setFilter] = useState('');

  const goToCart = useCallback(() => {
    navigation.navigate(CART_SCREEN);
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      iconRightName: 'md-cart',
      iconRightType: 'ionicons',
      actionButtonRight: goToCart,
      iconColor: Colors.WHITE,
      title: 'Bem vindo Mayh',
    });
  }, [navigation, goToCart, Colors]);

  function renderProduct({ item }: any) {
    if (item.name.includes(filter)) {
      return (
        <S.ContainerProduct>
          <S.ProductImg source={{ uri: item.product_url }} />
          <S.ContainerProductInfo>
            <S.ProductText>{item.name}</S.ProductText>
            <S.ProductUnity>{item.unity} un</S.ProductUnity>
          </S.ContainerProductInfo>

          <CheckBox />
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

        <FAB
          style={{
            backgroundColor: Colors.BLUE,
            position: 'absolute',
            margin: 10,
            right: 0,
            bottom: 80,
          }}
          icon="plus"
          color={Colors.WHITE}
          onPress={() => navigation.navigate(ITEM_SCREEN)}
        />

        <S.ContainerBase>
          <BaseBoard name="clipboard-list" type="font-5" />
        </S.ContainerBase>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
