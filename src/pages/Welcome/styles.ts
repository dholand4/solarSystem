import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
flex: 1;
padding: 20px;
align-items: center;
justify-content: center;
background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
font-size: 22px;
font-weight: bold;
margin-bottom: -40px;
color: ${theme.colors.primary};
line-height: 30px;
`;
