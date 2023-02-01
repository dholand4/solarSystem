import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
flex: 1;
padding: 20px;
align-items: center;
justify-content: center;
background-color: ${theme.colors.background};
`;

export const title = styled.Text`
font-size: 23px;
font-weight: 400;
margin-bottom: 50px;
color: ${theme.colors.text};
`;
