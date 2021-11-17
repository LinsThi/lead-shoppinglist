import React from 'react';

import * as S from './styles';

interface HeaderProps {
  enableNavigation?: boolean;
  title?: string;
  navigation: any;
  options: any;
}

export function Header({
  enableNavigation,
  title,
  navigation,
  options,
}: HeaderProps) {
  return (
    <S.Container>
      <S.StatusBar backgroundColor="#4299e1" />
      {enableNavigation && (
        <S.ButtonLeft onPress={() => navigation.goBack()}>
          <S.IconLeft
            iconType={options.iconLeftType}
            name={options.iconLeftName}
            iconColor={options.iconColor}
            size={25}
          />
        </S.ButtonLeft>
      )}
      <S.ContainerTitle>
        <S.Title>{title || options.title}</S.Title>
      </S.ContainerTitle>
      {options.iconRightName && (
        <S.ButtonRight>
          <S.IconRight
            iconType={options.iconRightType}
            name={options.iconRightName}
            iconColor={options.iconColor}
            size={25}
          />
        </S.ButtonRight>
      )}
    </S.Container>
  );
}
