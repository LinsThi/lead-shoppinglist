import { cloneDeep } from 'lodash';
import React, { useCallback, useContext, useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { ProductProps } from '~/@types/Entity/Product';
import { insertItemAction } from '~/store/ducks/grocery/actions';

import { changeSelectedProduct } from './utils';

interface CheckProductProps {
  isSelected: boolean;
  product: ProductProps;
}
export function CheckBox({ isSelected, product }: CheckProductProps) {
  const { Colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(isSelected);

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  const handleChangeCheckedProduct = useCallback(() => {
    const listClone = cloneDeep(groceryList);
    const newList = changeSelectedProduct(listClone, product);
    dispatch(insertItemAction(newList));

    setChecked(!checked);
  }, [dispatch, groceryList, product, checked]);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={handleChangeCheckedProduct}
      color={Colors.BLUE}
    />
  );
}
