import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
flex: 1;
padding-top: 28px;
align-items: center;
justify-content: center;
background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
font-size: 23px;
font-weight: 400;
margin-bottom: 50px;
color: ${theme.colors.text};
`;
