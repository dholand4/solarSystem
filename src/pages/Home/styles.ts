import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
padding-top: 42px;
flex: 1;
align-items: center;
background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
font-size: 23px;
font-weight: 400;
margin-bottom: 50px;
color: ${theme.colors.text};
`;
