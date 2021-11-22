import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const SelectWrapper = styled.View`
  margin-left: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const LabelSelect = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.Colors.CELLO};
`;

export const SelectPicker = styled(Picker)`
  background: #fff;
  width: 65%;
  border: 1px;
  margin-left: -5px;
`;
