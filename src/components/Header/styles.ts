import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Header = styled.View`
height: 340px;
width: 100%;
`;

export const Card = styled.View`
position: absolute;
align-items: center;
right: 18px;
`;

export const Image = styled.Image`
width: 150px;
height: 150px;
`;

export const title = styled.Text`
font-size: 25px;
font-weight: 400;
margin-top: 25px;
color: ${theme.colors.white};
`;

export const Back = styled.TouchableOpacity`
position: absolute;
top: 80px;
left: 40px;
`;
