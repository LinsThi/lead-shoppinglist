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

  const [productSelect, setProductSelect] = useState<ProductProps>(
    {} as ProductProps,
  );
  const [visible, setVisible] = useState(false);
  const [filterItems, setFilterItems] = useState('');
  const [listItems, setListItems] = useState<GroceryProps[] | []>([]);
  const [allListItems, setAllListItems] = useState<ProductProps[] | []>([]);
  const [listItemsFilter, setListItemsFilter] = useState<ProductProps[] | []>(
    [],
  );
  const [amountCart, setAmountCart] = useState(0);

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

  const showModal = useCallback((item: ProductProps) => {
    setVisible(true);
    setProductSelect(item);
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

  useEffect(() => {
    if (filterItems) {
      updateItemsFilter();
    } else {
      setListItemsFilter([]);
    }
  }, [filterItems, updateItemsFilter]);

  useEffect(() => {
    let amount = 0;
    const listCount = listItems;

    listCount.map(categoryCurrent => {
      categoryCurrent.listItems.map(itemsCurrent => {
        const value = itemsCurrent.price;
        const qnt = itemsCurrent.quantity;
        amount += parseInt(value, 10) * parseInt(qnt, 10);
        return null;
      });

      return null;
    });

    setAmountCart(amount);
  }, [listItems]);

  const renderProduct: ListRenderItem<ProductProps> = ({ item }) => {
    return (
      <S.ContainerProduct onPress={() => showModal(item)}>
        <S.ProductImg source={{ uri: item.image }} />
        <S.ContainerProductInfo>
          <S.ProductText>{item.name}</S.ProductText>
          <S.ProductUnity>
            {item.quantity} un / {item.price} R$ cada
          </S.ProductUnity>
        </S.ContainerProductInfo>

        <CancelProduct product={item} />
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

        <S.ContainerBase>
          <BaseBoard
            name="md-cart"
            type="ionicons"
            itensTotalCart={listItems.length + 1}
            amountTotalCart={amountCart}
          />
        </S.ContainerBase>

        <ModalProduct
          visible={visible}
          setVisible={setVisible}
          productSelect={productSelect}
        />
      </S.Container>
    </KeyboardAvoidingView>
  );
}
