import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface TextInputProps {
  iconRight?: string;
}

export const InputWrapper = styled.View`
  margin-bottom: 10px;
`;

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 14px;

  padding-left: 15px;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 14px;
  background: #fff;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  padding-left: 3px;
`;

export const InputLogin = styled.TextInput<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  padding-right: 10px;
  height: 53px;
`;

export const Touchable = styled.TouchableOpacity``;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, iconColor, theme }) => ({
    name,
    size: theme.Sizes.ICON_SIZE,
    color: iconColor || theme.Colors.LIGHT_GRAY,
    type: iconType,
  }),
)<IconInputProps>``;
