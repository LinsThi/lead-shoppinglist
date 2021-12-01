import { useNavigation, useRoute } from '@react-navigation/core';
import cloneDeep from 'lodash/cloneDeep';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { Button } from '~/components/Button';
import InputItem from '~/components/InputItem';
import Select from '~/components/Select';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { CategoryProps } from '~/@types/Entity/Category';
import type { ProductProps } from '~/@types/Entity/Product';
import logoIMG from '~/assets/groceries.png';
import { CATEGORY_SCREEN } from '~/constants/routes';
import { insertItemAction } from '~/store/ducks/grocery/actions';

import { insertItem, updateItemInList } from './utils';

import * as S from './styles';

export function AddItem() {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();

  const { Colors } = useContext(ThemeContext);

  const { item } = route.params;

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  const [image, setImage] = useState(
    'https://a-static.mlcdn.com.br/618x463/detergente-liquido-ype-neutro-500ml/costaatacado/90146/bc45e8e91700e557fe42944c14353cac.jpg',
  );
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unity, setUnity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<CategoryProps>({} as CategoryProps);

  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: Colors.WHITE,
      title: item ? 'Editar produto' : 'Cadastrar Produto',
    });

    if (item) {
      setName(item.name);
      setQuantity(item.quantity);
      setUnity(item.unity);
      setPrice(item.price);
      setCategory(item.category);
    }
  }, [navigation, Colors, item]);

  const newItem = useCallback(() => {
    const list = cloneDeep(groceryList);
    const newList = insertItem(
      list,
      image,
      name,
      quantity,
      unity,
      price,
      category,
    );

    dispatch(insertItemAction(newList));
    navigation.goBack();
  }, [
    category,
    groceryList,
    image,
    name,
    quantity,
    unity,
    price,
    dispatch,
    navigation,
  ]);

  const updateItem = useCallback(
    (item: ProductProps) => {
      const listClone = cloneDeep(groceryList);
      const newList = updateItemInList(
        listClone,
        item.category.id,
        item.id,
        image,
        name,
        quantity,
        unity,
        price,
        category,
      );

      dispatch(insertItemAction(newList));
      navigation.goBack();
    },
    [
      category,
      groceryList,
      image,
      name,
      quantity,
      unity,
      price,
      dispatch,
      navigation,
    ],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={false}
    >
      <S.Container>
        <S.ContainerSendInput>
          <S.LogoImage source={logoIMG} />
        </S.ContainerSendInput>

        <S.ContainerInputs>
          <InputItem
            placeholder="Digite o nome do produto"
            label="Nome"
            value={name}
            onChangeText={setName}
          />

          <S.DoubleInput>
            <InputItem
              placeholder="Digite a quantidade"
              label="Quantidade"
              doubleInput
              value={quantity}
              onChangeText={setQuantity}
            />

            <Select
              label="Unidade"
              selectedValue={unity}
              onValueChange={itemUnity => setUnity(itemUnity)}
            />
          </S.DoubleInput>

          <InputItem
            placeholder="Digite o preço do produto"
            label="Preço"
            value={price}
            onChangeText={setPrice}
          />

          <S.ContainerCategory>
            <Select
              label="Categoria"
              categorySelected
              selectedValue={category}
              onValueChange={itemCategory => setCategory(itemCategory)}
            />

            <FAB
              style={{
                backgroundColor: Colors.BLUE,
                position: 'absolute',
                marginRight: -30,
                right: 0,
                top: 10,
              }}
              icon="pencil"
              color={Colors.WHITE}
              onPress={() => navigation.navigate(CATEGORY_SCREEN)}
            />
          </S.ContainerCategory>
        </S.ContainerInputs>

        <S.ContainerButton>
          <Button
            title={item ? 'Atualizar produto' : 'Salvar'}
            color={Colors.BLUE}
            fontColor={Colors.WHITE}
            onPress={() => (item ? updateItem(item) : newItem())}
          />
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
