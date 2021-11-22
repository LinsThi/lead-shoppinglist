import styled from 'styled-components/native';

interface InputProps {
  doubleInput?: boolean;
}

export const InputWrapper = styled.View<InputProps>`
  margin-left: 20px;
  margin-bottom: 20px;
  width: ${({ doubleInput }) => (doubleInput ? 50 : 100)}%;
`;

export const Container = styled.View`
  width: 100%;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const LabelInput = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.Colors.CELLO};
`;

export const InputLogin = styled.TextInput`
  width: 100%;
  height: 40px;
`;
