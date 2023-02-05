import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Header = styled.View`
height: 32%;
width: 100%;
padding: 20px;
background-color: ${theme.colors.primary};
align-items: flex-end;
justify-content: center;
`;

export const Card = styled.View`
align-items: center;
padding: 10px;
border: 1px;
width: 150px;
border-radius: 15px;
border-color: ${theme.colors.background};
`;

export const Image = styled.Image`
height: 120px;
width: 120px;
margin-bottom: 15px;
`;

export const title = styled.Text`
font-size: 18px;
font-weight: 500;
color: ${theme.colors.white};
`;

