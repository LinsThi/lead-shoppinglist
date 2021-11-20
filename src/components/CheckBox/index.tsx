import React, { useContext, useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { ThemeContext } from 'styled-components/native';

export function CheckBox() {
  const { Colors } = useContext(ThemeContext);

  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color={Colors.BLUE}
    />
  );
}
