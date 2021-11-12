import React from 'react';
import type { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps {
  iconLeft?: string;
  iconType?: string;
}

const FilterBar: React.FC<TextInputProps & InputProps> = ({
  iconLeft,
  iconType,
  ...rest
}: InputProps) => {
  return (
    <S.InputWrapper>
      <S.ContainerIcon>
        <S.IconInput
          iconType={iconType}
          name={iconLeft}
          iconColor="#a5a5a5"
          size={20}
        />
        <S.Container>
          <S.ContainerInput>
            <S.InputFilter {...rest} />
          </S.ContainerInput>
        </S.Container>
      </S.ContainerIcon>
    </S.InputWrapper>
  );
};

export default FilterBar;
