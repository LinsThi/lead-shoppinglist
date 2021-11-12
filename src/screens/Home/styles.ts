import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerFilter = styled.View`
  flex: 0.12;
  align-items: center;
  justify-content: center;
`;

export const ContainerCategory = styled.View`
  flex: 1;
`;

export const ContainerProduct = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerProductInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const ContainerBase = styled.View`
  flex: 0.12;
`;

export const ListCategory = styled.FlatList`
  flex: 1;
  padding: 10px;
  background: #ffffff;
`;

export const ListProduct = styled.FlatList`
  flex: 1;
`;

export const CategoryText = styled.Text`
  font-size: 22px;
  margin-bottom: 10px;
  color: #a0aec0;
`;

export const ProductImg = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ProductText = styled.Text`
  font-size: 20px;
`;

export const ProductUnity = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
  color: #8492a6;
`;
