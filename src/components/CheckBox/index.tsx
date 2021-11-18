import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';

import Theme from '~/themes';

export function CheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color={Theme.light.Colors.BLUE}
    />
  );
}
