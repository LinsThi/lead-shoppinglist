import React from 'react';
import type { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps {
  iconRight?: string;
  iconLeft?: string;
  iconType?: string;
  actionIcon?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
  iconRight,
  iconLeft,
  iconType,
  actionIcon,
  ...rest
}: InputProps) => {
  return (
    <S.InputWrapper>
      <S.ContainerInputIcon>
        {iconLeft && <S.IconInput iconType={iconType} name={iconLeft} />}
        <S.Container>
          <S.ContainerInput>
            <S.InputLogin {...rest} iconRight={iconRight} />
            {iconRight && (
              <S.Touchable onPress={() => actionIcon && actionIcon()}>
                <S.IconInput name={iconRight} />
              </S.Touchable>
            )}
          </S.ContainerInput>
        </S.Container>
      </S.ContainerInputIcon>
    </S.InputWrapper>
  );
};

export default Input;
