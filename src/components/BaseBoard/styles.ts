import styled from 'styled-components/native';

import Icon from '../Icon';

interface SymbolProps {
  name: string;
  type: string;
}

export const BaseBoardWrapper = styled.View`
  background: ${({ theme }) => theme.Colors.BLUE};
  flex: 1;
`;

export const ContainerImage = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
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

export const SymbolImg = styled(Icon).attrs<SymbolProps>(({ name, type }) => ({
  name,
  size: 50,
  color: 'white',
  type,
}))<SymbolProps>``;

export const TextInfo = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_BUTTON}px;
  margin-left: 10px;
`;
