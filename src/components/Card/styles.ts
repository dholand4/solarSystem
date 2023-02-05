import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const CardPlanet = styled.TouchableOpacity`
height: 190px;
width: 180px;
background-color: ${theme.colors.primary};
border: 0.5px;
align-items: center;
justify-content: center;
border-radius: 15px;
margin: 5px;
`;

export const Image = styled.Image`
height: 120px;
width: 120px;
margin-bottom: 15px;
`;

export const title = styled.Text`
font-size: 18px;
font-weight: 400;
color: ${theme.colors.white};
`;

