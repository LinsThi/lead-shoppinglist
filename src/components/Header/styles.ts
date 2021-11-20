import styled, { css } from 'styled-components/native';

import Icon from '~/components/Icon';

interface Props {
  enableNavigation?: boolean;
  iconRight?: string;
}

interface IconProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

export const Container = styled.View<Props>`
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.BLUE};
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;

export const StatusBar = styled.StatusBar``;

export const ContainerTitle = styled.View<Props>`
  flex: ${({ enableNavigation, iconRight }) =>
    enableNavigation || iconRight ? 0.8 : 1};
  ${props =>
    props.enableNavigation &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

export const Title = styled.Text<Props>`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_TEXT}px;
  margin-left: 15px;

  ${props =>
    props.enableNavigation &&
    css`
      margin: 0;
    `}
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.1;
  align-items: center;
  margin-left: -10px;
`;

export const IconLeft = styled(Icon).attrs<IconProps>(
  ({ name, iconType, iconColor, theme }) => ({
    name,
    size: theme.Sizes.ICON_SIZE_HEADER,
    color: iconColor || theme.Colors.LIGHT_GRAY,
    type: iconType,
  }),
)<IconProps>``;

export const ButtonRight = styled.TouchableOpacity`
  flex: 0.2;
  margin-right: -30px;
`;

export const IconRight = styled(Icon).attrs<IconProps>(
  ({ name, iconType, iconColor, theme }) => ({
    name,
    size: theme.Sizes.ICON_SIZE_HEADER,
    color: iconColor || theme.Colors.LIGHT_GRAY,
    type: iconType,
  }),
)<IconProps>``;
