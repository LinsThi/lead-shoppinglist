import styled from 'styled-components/native';

interface ButtonProps {
  colorBackground: string;
  isPattern?: boolean;
}

interface TextProps {
  colorFont: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const containerModal = {
  backgroundColor: 'white',
  padding: 20,
  margin: 15,
  borderRadius: 6,
  height: 130,
};

export const ButtonModal = styled.TouchableOpacity<ButtonProps>`
  width: 100px;
  height: 50px;

  justify-content: center;
  align-items: center;

  background: ${({ colorBackground }) => colorBackground};
  border-radius: 7px;
  margin-right: ${({ isPattern }) => (isPattern ? 10 : 0)}px;
`;

export const TextProduct = styled.Text`
  font-size: 24px;
  margin-bottom: 5px;
  color: #000;
`;

export const TextButton = styled.Text<TextProps>`
  font-size: 20px;
  color: ${({ colorFont }) => colorFont};
`;
