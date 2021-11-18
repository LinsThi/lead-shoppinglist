import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';

import { Button } from '~/components/Button';
import InputItem from '~/components/InputItem';

import logoIMG from '~/assets/groceries.png';
import { CATEGORY_SCREEN, ITEM_SCREEN } from '~/constants/routes';
import Theme from '~/themes';

import * as S from './styles';

export function AddItem({ navigation }: any) {
  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: '#fff',
      title: 'Cadastrar Produto',
    });
  }, [navigation]);

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
            <InputItem
              placeholder="Selecione a unidade"
              label="Unidade"
              doubleInput
            />
          </S.DoubleInput>

          <InputItem placeholder="Digite o preço do produto" label="Preço" />

          <S.ContainerCategory>
            <InputItem
              placeholder="Selecione a categoria"
              categoryInput
              label="Categoria"
            />

            <FAB
              style={{
                backgroundColor: Theme.light.Colors.BLUE,
                position: 'absolute',
                marginRight: -30,
                right: 0,
                top: 10,
              }}
              icon="pencil"
              color={Theme.light.Colors.WHITE}
              onPress={() => navigation.navigate(CATEGORY_SCREEN)}
            />
          </S.ContainerCategory>
        </S.ContainerInputs>

        <S.ContainerButton>
          <Button
            title="Salvar"
            color={Theme.light.Colors.BLUE}
            fontColor={Theme.light.Colors.WHITE}
          />
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
