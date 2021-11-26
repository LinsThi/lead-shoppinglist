import type { PickerProps } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';

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
  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );
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
              {groceryList.map(ctg => {
                return (
                  <Picker.Item label={ctg.name} value={ctg} key={ctg.id} />
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
              <Picker.Item label="KG" value="KG" />
              <Picker.Item label="L" value="L" />
              <Picker.Item label="G" value="G" />
            </S.SelectPicker>
          )}
        </S.ContainerSelect>
      </S.Container>
    </S.SelectWrapper>
  );
};

export default Select;
