import styled from 'styled-components/native';

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

export const Container = styled.View`
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.BLUE};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusBar = styled.StatusBar``;

export const ContainerTitle = styled.View<Props>`
  flex: ${({ enableNavigation, iconRight }) =>
    enableNavigation || iconRight ? 0.8 : 1};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  margin-left: 18px;
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_TEXT}px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.2;
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
