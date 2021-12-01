import { cloneDeep } from 'lodash';
import React, { useCallback, useContext } from 'react';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { ProductProps } from '~/@types/Entity/Product';
import { insertItemAction } from '~/store/ducks/grocery/actions';

import { changeSelectedProduct } from '../CheckBox/utils';

interface CancelSelectedProps {
  product: ProductProps;
}

export function CancelProduct({ product }: CancelSelectedProps) {
  const { Colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  const handleChangeCheckedProduct = useCallback(() => {
    const listClone = cloneDeep(groceryList);
    const newList = changeSelectedProduct(listClone, product);

    dispatch(insertItemAction(newList));
  }, [dispatch, groceryList, product]);

  return (
    <IconButton
      icon="close-circle"
      color={Colors.RED}
      size={27}
      onPress={handleChangeCheckedProduct}
    />
  );
}
