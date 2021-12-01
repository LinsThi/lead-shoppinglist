import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
`;

export const ContainerFilter = styled.View`
  width: 100%;
  border-width: 9px;
  border-color: #c0ccda;
  justify-content: center;
  align-items: center;
`;

export const ContainerCategory = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerProduct = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const ContainerProductInfo = styled.View`
  width: 75%;
`;

export const ContainerBase = styled.View`
  height: 80px;
  width: 100%;
`;

export const ListCategory = styled.FlatList`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.Colors.WHITE};
`;

export const ListProduct = styled.FlatList``;

export const CategoryText = styled.Text`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_TEXT}px;
  color: ${({ theme }) => theme.Colors.SILVER};
`;

export const ProductImg = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ProductText = styled.Text`
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_LIST_PRODUCT}px;
`;

export const ProductUnity = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.Colors.GRAY};
`;
