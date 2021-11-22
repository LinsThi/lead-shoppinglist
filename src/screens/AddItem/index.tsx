import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { ThemeContext } from 'styled-components';

import { Button } from '~/components/Button';
import InputItem from '~/components/InputItem';
import Select from '~/components/Select';

import logoIMG from '~/assets/groceries.png';
import { CATEGORY_SCREEN } from '~/constants/routes';

import * as S from './styles';

export function AddItem({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  const [category, setCategory] = useState('');
  const [unity, setUnity] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Produto',
    });
  }, [navigation, Colors]);

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
          <InputItem placeholder="Digite o nome do produto" label="Nome" />

          <S.DoubleInput>
            <InputItem
              placeholder="Digite a quantidade"
              label="Quantidade"
              doubleInput
            />

            <Select
              label="Unidade"
              selectedValue={unity}
              onValueChange={itemUnity => setUnity(itemUnity)}
            />
          </S.DoubleInput>

          <InputItem placeholder="Digite o preço do produto" label="Preço" />

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
          <Button title="Salvar" color={Colors.BLUE} fontColor={Colors.WHITE} />
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
