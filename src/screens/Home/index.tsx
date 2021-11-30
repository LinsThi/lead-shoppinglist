import React, { useCallback, useContext, useEffect, useState } from 'react';
import type { ListRenderItem } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { BaseBoard } from '~/components/BaseBoard';
import { CheckBox } from '~/components/CheckBox';
import FilterBar from '~/components/FilterBar';
import { ModalProduct } from '~/components/Modal';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { GroceryProps } from '~/@types/Entity/Grocery';
import type { ProductProps } from '~/@types/Entity/Product';
import { CART_SCREEN, ITEM_SCREEN } from '~/constants/routes';

import * as S from './styles';

export function Home({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  const [visible, setVisible] = useState(false);
  const [filterItems, setFilterItems] = useState('');
  const [listItems, setListItems] = useState<GroceryProps[] | []>([]);
  const [allListItems, setAllListItems] = useState<ProductProps[] | []>([]);
  const [listItemsFilter, setListItemsFilter] = useState<ProductProps[] | []>(
    [],
  );

  const { username } = useSelector((state: AplicationState) => state.user);
  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  const goToCart = useCallback(() => {
    navigation.navigate(CART_SCREEN);
  }, [navigation]);

  const updateItemsFilter = useCallback(() => {
    let itemsFilter: ProductProps[] | [] = [];
    itemsFilter = allListItems.filter(listItem => {
      return listItem.name.toUpperCase().includes(filterItems.toUpperCase());
    });

    setListItemsFilter(itemsFilter);
  }, [allListItems, filterItems]);

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      iconRightName: 'md-cart',
      iconRightType: 'ionicons',
      actionButtonRight: goToCart,
      iconColor: Colors.WHITE,
      title: `Bem vindo(a) ${username}`,
    });
  }, [navigation, goToCart, Colors, username]);

  useEffect(() => {
    const newList: ProductProps[] = [];
    groceryList.map((currentItem: GroceryProps) => {
      currentItem.listItems.map((item: ProductProps) => {
        return newList.push(item);
      });
      return null;
    });
    setAllListItems(newList);
  }, [groceryList]);

  useEffect(() => {
    const newList = groceryList.filter(
      (currentItem: GroceryProps) => currentItem.listItems.length !== 0,
    );
    setListItems(newList);
  }, [groceryList]);

  useEffect(() => {
    if (filterItems) {
      updateItemsFilter();
    } else {
      setListItemsFilter([]);
    }
  }, [filterItems, updateItemsFilter]);

  const renderProduct: ListRenderItem<ProductProps> = ({ item }) => {
    return (
      <S.ContainerProduct onPress={() => showModal()}>
        <S.ProductImg source={{ uri: item.image }} />
        <S.ContainerProductInfo>
          <S.ProductText>{item.name}</S.ProductText>
          <S.ProductUnity>
            {item.quantity} un / {item.price} R$ cada
          </S.ProductUnity>
        </S.ContainerProductInfo>

        <CheckBox />
      </S.ContainerProduct>
    );
  };

  const renderCategory: ListRenderItem<GroceryProps> = ({ item }) => {
    return (
      <S.ContainerCategory>
        <S.CategoryText>{item.name}</S.CategoryText>

        <S.ListProduct
          data={item.listItems}
          extraData={item.listItems}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderProduct}
        />
      </S.ContainerCategory>
    );
  };

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
            value={filterItems}
            onChangeText={setFilterItems}
          />
        </S.ContainerFilter>
        {listItemsFilter.length > 0 ? (
          <S.ListCategory
            data={listItemsFilter}
            extraData={listItemsFilter}
            keyExtractor={(_, index) => String(index)}
            renderItem={renderProduct}
          />
        ) : (
          <S.ListCategory
            data={listItems}
            extraData={listItems}
            keyExtractor={(_, index) => String(index)}
            renderItem={renderCategory}
          />
        )}

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
        <ModalProduct visible={visible} setVisible={setVisible} />
      </S.Container>
    </KeyboardAvoidingView>
  );
}
