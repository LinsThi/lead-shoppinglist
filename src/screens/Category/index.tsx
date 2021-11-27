import { cloneDeep } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import InputItem from '~/components/InputItem';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { insertCategory } from '~/store/ducks/category/action';
import { insertCategoryInListAction } from '~/store/ducks/grocery/actions';

import { addCategory, insertCategoryInList } from './utils';

import * as S from './styles';

export function Category({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { groceryCategory } = useSelector(
    (state: AplicationState) => state.category,
  );

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Categoria',
    });
  }, [navigation, Colors]);

  const handleCreateNewCategory = useCallback(() => {
    const listCategory = cloneDeep(groceryCategory);
    const listGrocery = cloneDeep(groceryList);

    const newListCategory = addCategory(listCategory, newCategory, listGrocery);
    const newList = insertCategoryInList(listCategory, listGrocery);

    dispatch(insertCategory(newListCategory));
    dispatch(insertCategoryInListAction(newList));

    navigation.goBack();
  }, [dispatch, groceryCategory, groceryList, navigation, newCategory]);

  return (
    <S.Container>
      <S.ContainerInput>
        <InputItem
          placeholder="Digite o nome da categoria"
          label="Nome da Categoria"
          value={newCategory}
          onChangeText={setNewCategory}
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <Button
          title="Salvar"
          color={Colors.BLUE}
          fontColor={Colors.WHITE}
          onPress={() => handleCreateNewCategory()}
        />
      </S.ContainerButton>
    </S.Container>
  );
}
