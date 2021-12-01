import { useNavigation } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React, { useCallback, useContext } from 'react';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { ProductProps } from '~/@types/Entity/Product';
import { ITEM_SCREEN } from '~/constants/routes';
import { insertItemAction } from '~/store/ducks/grocery/actions';

import { removeProduct } from './utils';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
  productSelect: ProductProps;
}

export function ModalProduct({ visible, setVisible, productSelect }: Props) {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  const dispatch = useDispatch();

  const hideModal = () => setVisible(false);

  function handleEditProduct() {
    setVisible(false);
    navigation.navigate(ITEM_SCREEN, { item: productSelect });
  }

  function handleRemoveProduct() {
    const listClone = cloneDeep(groceryList);
    const newList = removeProduct(
      listClone,
      productSelect.category.id,
      productSelect.id,
    );

    dispatch(insertItemAction(newList));
    setVisible(false);
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={S.containerModal}
      >
        <S.Container>
          <S.TextProduct>{productSelect.name}</S.TextProduct>
          <S.ContainerButton>
            <S.ButtonModal
              isPattern
              colorBackground={Colors.BLUE}
              onPress={() => handleEditProduct()}
            >
              <S.TextButton colorFont={Colors.WHITE}>Editar</S.TextButton>
            </S.ButtonModal>
            <S.ButtonModal
              colorBackground={Colors.LIGHT_GRAY}
              onPress={() => handleRemoveProduct()}
            >
              <S.TextButton colorFont={Colors.BLACK}>Excluir</S.TextButton>
            </S.ButtonModal>
          </S.ContainerButton>
        </S.Container>
      </Modal>
    </Portal>
  );
}
