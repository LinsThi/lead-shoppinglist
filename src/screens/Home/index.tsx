import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';

import { BaseBoard } from '~/components/BaseBoard';
import { CheckBox } from '~/components/CheckBox';
import FilterBar from '~/components/FilterBar';

import { ITEM_SCREEN } from '~/constants/routes';
import Theme from '~/themes';

import { listCategory } from './mock';

import * as S from './styles';

export function Home({ navigation }: any) {
  const [filter, setFilter] = useState('');

  const goToCart = () => {
    // navigation.navigate();
  };

  useEffect(() => {
    navigation.setOptions({
      iconRightName: 'md-cart',
      iconRightType: 'ionicons',
      actionButtonRight: goToCart,
      iconColor: '#fff',
      title: 'Bem vindo Mayh',
    });
  }, []);

  function renderProduct({ item }: any) {
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
          keyExtractor={(item, index) => String(index)}
          renderItem={renderCategory}
        />

        <FAB
          style={{
            backgroundColor: Theme.light.Colors.BLUE,
            position: 'absolute',
            margin: 10,
            right: 0,
            bottom: 80,
          }}
          icon="plus"
          color={Theme.light.Colors.WHITE}
          onPress={() => navigation.navigate(ITEM_SCREEN)}
        />

        <S.ContainerBase>
          <BaseBoard />
        </S.ContainerBase>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
