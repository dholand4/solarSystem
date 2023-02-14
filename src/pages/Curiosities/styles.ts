import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: ${theme.colors.white};
  text-align: justify;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
`;

export const Background = styled.ImageBackground`
flex: 1;
`;
