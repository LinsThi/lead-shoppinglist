import { cloneDeep } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import type { ListRenderItem } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { BaseBoard } from '~/components/BaseBoard';
import { CancelProduct } from '~/components/CancelProduct';
import FilterBar from '~/components/FilterBar';
import { ModalProduct } from '~/components/Modal';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { GroceryProps } from '~/@types/Entity/Grocery';
import type { ProductProps } from '~/@types/Entity/Product';

import * as S from './styles';

export function Cart({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  const [visible, setVisible] = useState(false);
  const [filterItems, setFilterItems] = useState('');
  const [listItems, setListItems] = useState<GroceryProps[] | []>([]);
  const [allListItems, setAllListItems] = useState<ProductProps[] | []>([]);
  const [listItemsFilter, setListItemsFilter] = useState<ProductProps[] | []>(
    [],
  );

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

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
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: Colors.WHITE,
      title: 'Carrinho',
    });
  }, [navigation, Colors]);

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

  // useEffect(() => {
  //   const listWithAllProducts = groceryList.filter(
  //     (currentItem: GroceryProps) => currentItem.listItems.length !== 0,
  //   );

  //   setListItems(listWithAllProducts);
  // }, [groceryList]);

  useEffect(() => {
    if (filterItems) {
      updateItemsFilter();
    } else {
      setListItemsFilter([]);
    }
  }, [filterItems, updateItemsFilter]);

  useEffect(() => {
    const listClone = cloneDeep(groceryList);

    listClone.map((currentGrocery: GroceryProps) => {
      let newListItems: ProductProps[] | [] = [];
      newListItems = currentGrocery.listItems.filter(
        (currentItem: ProductProps) => currentItem.isSelected,
      );
      currentGrocery.listItems = newListItems;
      return newListItems;
    });

    const listWithAllProducts = listClone.filter(
      (currentItem: GroceryProps) => currentItem.listItems.length !== 0,
    );

    setListItems(listWithAllProducts);
  }, [groceryList]);

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

        <CancelProduct />
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

        <S.ListCategory
          data={listItems}
          extraData={listItems}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderCategory}
        />

        <S.ContainerBase>
          <BaseBoard name="md-cart" type="ionicons" />
        </S.ContainerBase>

        <ModalProduct visible={visible} setVisible={setVisible} />
      </S.Container>
    </KeyboardAvoidingView>
  );
}
