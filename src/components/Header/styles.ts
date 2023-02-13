import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Header = styled.View`
height: 340px;
width: 100%;
background-color: ${theme.colors.primary};
justify-content: center;
`;

export const Card = styled.View`
align-items: center;
left: 60px;
`;

export const Image = styled.Image`
width: 200px;
height: 200px;
`;

export const title = styled.Text`
font-size: 25px;
font-weight: 400;
margin-top: 22px;
color: ${theme.colors.white};
`;

export const Back = styled.TouchableOpacity`
position: absolute;
top: 50px;
left: 40px;
`;

export const BackImage = styled.Image`
height: 340px;
width: 450px;
position: absolute;
`;