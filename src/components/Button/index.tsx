import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { Container, ButtonLogin, Name } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  fontColor?: string;
}

export function Button({ color, fontColor, title, ...rest }: ButtonProps) {
  return (
    <Container>
      <ButtonLogin {...rest} color={color}>
        <Name fontColor={fontColor}>{title}</Name>
      </ButtonLogin>
    </Container>
  );
}
