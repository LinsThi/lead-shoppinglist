import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background: ${({ theme }) => theme.Colors.WHITE};
  width: 200px;
  height: 53px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.Colors.BLUE};
`;
