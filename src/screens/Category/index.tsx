import React, { useEffect } from 'react';

import { Button } from '~/components/Button';
import InputItem from '~/components/InputItem';

import Theme from '~/themes';

import * as S from './styles';

export function Category({ navigation }: any) {
  useEffect(() => {
    navigation.setOptions({
      iconLeftName: 'arrowleft',
      iconLeftType: 'antDesign',
      iconColor: '#fff',
      title: 'Cadastrar Categoria',
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.ContainerInput>
        <InputItem
          placeholder="Digite o nome da categoria"
          label="Nome da Categoria"
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <Button
          title="Salvar"
          color={Theme.light.Colors.BLUE}
          fontColor={Theme.light.Colors.WHITE}
        />
      </S.ContainerButton>
    </S.Container>
  );
}
