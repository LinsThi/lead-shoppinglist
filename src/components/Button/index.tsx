import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { HOME_SCREEN } from '~/constants/routes';

import { Container, ButtonLogin, Name } from './styles';

export function Button() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  return (
    <Container>
      <ButtonLogin onPress={() => handleLogin()}>
        <Name>Entrar</Name>
      </ButtonLogin>
    </Container>
  );
}
