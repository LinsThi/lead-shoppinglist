import React, { useContext } from 'react';
import { IconButton } from 'react-native-paper';
import { ThemeContext } from 'styled-components/native';

export function CancelProduct() {
  const { Colors } = useContext(ThemeContext);

  return <IconButton icon="close-circle" color={Colors.RED} size={27} />;
}
