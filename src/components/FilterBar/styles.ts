import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

export const InputWrapper = styled.View``;

export const ContainerIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 7px;
  padding-left: 10px;
`;

export const Container = styled.View`
  width: 330px;
  height: 50px;
  background: #fff;
  border-radius: 7px;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  padding: 0px 10px;
`;

export const InputFilter = styled.TextInput`
  width: 100%;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, iconColor }) => ({
    name,
    color: iconColor,
    type: iconType,
  }),
)<IconInputProps>``;
