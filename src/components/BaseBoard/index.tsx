import React from 'react';
import { Image } from 'react-native';

import symbolImg from '~/assets/raster.png';

import * as S from './styles';

export function BaseBoard() {
  return (
    <S.BaseBoardWrapper>
      <S.ContainerImage>
        <S.SymbolImg source={symbolImg} />
        <S.Container>
          <S.ContainerInfo>
            <S.TextInfo>Total de itens</S.TextInfo>
            <S.TextInfo>Valor Total</S.TextInfo>
          </S.ContainerInfo>
          <S.ContainerQuantity>
            <S.TextInfo>10</S.TextInfo>
            <S.TextInfo>R$ 350,00</S.TextInfo>
          </S.ContainerQuantity>
        </S.Container>
      </S.ContainerImage>
    </S.BaseBoardWrapper>
  );
}
