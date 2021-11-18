import styled from 'styled-components/native';

export const BaseBoardWrapper = styled.View`
  background: ${({ theme }) => theme.Colors.BLUE};
  flex: 1;
`;

export const ContainerImage = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerInfo = styled.View``;

export const ContainerQuantity = styled.View`
  align-items: center;
`;

export const SymbolImg = styled.Image`
  width: 60px;
  height: 60px;

  margin-right: 10px;
`;

export const TextInfo = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_BUTTON}px;
`;
