import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 15px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ContainerText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 50px;
`