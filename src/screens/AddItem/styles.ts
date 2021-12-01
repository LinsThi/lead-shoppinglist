import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.Colors.WHITE};
`;

export const ContainerSendInput = styled.View`
  flex: 0.3;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ContainerInputs = styled.View`
  flex: 1;
  width: 85%;
`;

export const DoubleInput = styled.View`
  flex-direction: row;
  width: 93%;
`;

export const ContainerCategory = styled.View`
  width: 100%;
`;

export const ContainerButton = styled.View`
  flex: 0.15;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 120px;
  height: 120px;
`;
