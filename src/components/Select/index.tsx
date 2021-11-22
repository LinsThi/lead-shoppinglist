import type { PickerProps } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

import { listCategory } from '~/screens/Cart/mock';

import * as S from './styles';

interface SelectProps {
  label: string;
  categorySelected?: boolean;
}

const Select: React.FC<PickerProps & SelectProps> = ({
  label,
  categorySelected = false,
  ...rest
}: SelectProps) => {
  return (
    <S.SelectWrapper>
      <S.LabelSelect>{label}</S.LabelSelect>
      <S.Container>
        <S.ContainerSelect>
          {categorySelected && (
            <S.SelectPicker {...rest}>
              <Picker.Item
                label="Selecione a categoria"
                value="a"
                enabled={false}
              />
              {listCategory.map(ctg => {
                return (
                  <Picker.Item label={ctg.name} value={ctg.name} key={ctg.id} />
                );
              })}
            </S.SelectPicker>
          )}

          {!categorySelected && (
            <S.SelectPicker {...rest}>
              <Picker.Item
                label="Selecione a unidade"
                value="b"
                enabled={false}
              />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
            </S.SelectPicker>
          )}
        </S.ContainerSelect>
      </S.Container>
    </S.SelectWrapper>
  );
};

export default Select;
