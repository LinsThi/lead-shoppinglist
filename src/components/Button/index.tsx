import React from 'react';
import { Text } from 'react-native';

import { Container, ButtonLogin, Name } from './styles';

export function Button() {
  return (
    <Container>
      <ButtonLogin>
        <Name>Entrar</Name>
      </ButtonLogin>
    </Container>
  );
}
