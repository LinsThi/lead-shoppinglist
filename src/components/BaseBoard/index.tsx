import { cloneDeep, cloneDeepWith } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';

import { amountList, countAllItens } from './utils';

import * as S from './styles';

interface BaseBoardProps {
  name: string;
  type: string;
}

export function BaseBoard({ name, type }: BaseBoardProps) {
  const [allItems, setAllitems] = useState(0);
  const [amountTotal, setAmountTotal] = useState(0);

  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  useEffect(() => {
    const listCount = cloneDeepWith(groceryList);
    const countAllItems = countAllItens(listCount);
    setAllitems(countAllItems);

    const amountTotalList = amountList(listCount);
    setAmountTotal(amountTotalList);
  }, [groceryList]);

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
            <S.TextInfo>{allItems}</S.TextInfo>
            <S.TextInfo>R$ {amountTotal}</S.TextInfo>
          </S.ContainerQuantity>
        </S.Container>
      </S.ContainerImage>
    </S.BaseBoardWrapper>
  );
}
