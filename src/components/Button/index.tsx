import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { HOME_SCREEN } from '~/constants/routes';

import { Container, ButtonLogin, Name } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  fontColor?: string;
}

export function Button({ color, fontColor, title }: ButtonProps) {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  return (
    <Container>
      <ButtonLogin onPress={() => handleLogin()} color={color}>
        <Name fontColor={fontColor}>{title}</Name>
      </ButtonLogin>
    </Container>
  );
}
