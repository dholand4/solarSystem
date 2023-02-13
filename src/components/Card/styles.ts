import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const CardPlanet = styled.TouchableOpacity`
height: 190px;
width: 390px;
margin: 5px;
background-color: ${theme.colors.secondary};
border-radius: 10px;
justify-content: center;
border: 3px;
`;

export const Image = styled.Image`
height: 125px;
width: 125px;
`;

export const title = styled.Text`
font-size: 28px;
font-weight: 400;

color: ${theme.colors.white};
left: 35px;
`;
export const TextId = styled.Text`
font-size: 15px;
font-weight: 400;
color: ${theme.colors.white};
left: 35px;
`;

export const Planet = styled.View`
position: absolute;
align-items: center;
right: 28px;
`;

export const BackImage = styled.Image`
height: 184px;
width: 384px;
position: absolute;

`;