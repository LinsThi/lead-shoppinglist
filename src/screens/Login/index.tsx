import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

import logoIMG from '../../assets/groceries.png';

import * as S from './styles';

export function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={false}
    >
      <S.Container>
        <S.ContainerImage>
          <S.LogoImage source={logoIMG} />
        </S.ContainerImage>

        <S.ContainerInputs>
          <Input name="Digite seu username" />
          <Input name="Digite sua senha" password />
        </S.ContainerInputs>

        <S.ContainerButton>
          <Button />
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
