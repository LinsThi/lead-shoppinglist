import styled from 'styled-components/native';

interface ButtonProps {
  color?: string;
}

interface TextProps {
  fontColor?: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const ButtonLogin = styled.TouchableOpacity<ButtonProps>`
  background: ${({ theme, color }) => color || theme.Colors.WHITE};
  width: 200px;
  height: 53px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const Name = styled.Text<TextProps>`
  color: ${({ theme, fontColor }) => fontColor || theme.Colors.BLUE};
`;
