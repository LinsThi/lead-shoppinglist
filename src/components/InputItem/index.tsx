import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import * as S from './styles';

interface InputProps {
  label: string;
  doubleInput?: boolean;
  categoryInput?: boolean;
}

const InputItem: React.FC<TextInputProps & InputProps> = ({
  label,
  doubleInput = false,
  categoryInput,
  ...rest
}: InputProps) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.InputWrapper doubleInput={doubleInput}>
      <S.LabelInput>{label}</S.LabelInput>
      <S.Container>
        <S.ContainerInput>
          <S.InputLogin
            categoryInput={categoryInput}
            {...rest}
            style={{
              borderBottomColor: Colors.BLUE,
              borderBottomWidth: 2,
            }}
          />
        </S.ContainerInput>
      </S.Container>
    </S.InputWrapper>
  );
};

export default InputItem;
