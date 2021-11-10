import { Feather, AntDesign } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';

interface InputProps {
  name: string;
  password?: boolean;
}

export function Input({ name, password = false }: InputProps) {
  return (
    <S.Container>
      {!password ? (
        <Feather name="user" size={26} color="gray" />
      ) : (
        <AntDesign name="lock" size={26} color="gray" />
      )}
      <S.InputLogin placeholder={name} />
    </S.Container>
  );
}
