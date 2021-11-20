import React from 'react';

import * as S from './styles';

interface BaseBoardProps {
  name: string;
  type: string;
}

export function BaseBoard({ name, type }: BaseBoardProps) {
  return (
    <S.BaseBoardWrapper>
      <S.ContainerImage>
        <S.SymbolImg name={name} type={type} />
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
