import React from 'react';

import Theme from '~/themes';

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
      <S.StatusBar backgroundColor={Theme.light.Colors.BLUE} />
      {enableNavigation && (
        <S.ButtonLeft onPress={() => navigation.goBack()}>
          <S.IconLeft
            iconType={options.iconLeftType}
            name={options.iconLeftName}
            iconColor={options.iconColor}
          />
        </S.ButtonLeft>
      )}
      <S.ContainerTitle enableNavigation={enableNavigation}>
        <S.Title enableNavigation={enableNavigation}>
          {title || options.title}
        </S.Title>
      </S.ContainerTitle>
      {options.iconRightName && (
        <S.ButtonRight>
          <S.IconRight
            iconType={options.iconRightType}
            name={options.iconRightName}
            iconColor={options.iconColor}
          />
        </S.ButtonRight>
      )}
    </S.Container>
  );
}
