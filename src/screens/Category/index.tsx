import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import InputItem from '~/components/InputItem';

import * as S from './styles';

export function Category({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Categoria',
    });
  }, [navigation, Colors]);

  return (
    <S.Container>
      <S.ContainerInput>
        <InputItem
          placeholder="Digite o nome da categoria"
          label="Nome da Categoria"
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <Button title="Salvar" color={Colors.BLUE} fontColor={Colors.WHITE} />
      </S.ContainerButton>
    </S.Container>
  );
}
