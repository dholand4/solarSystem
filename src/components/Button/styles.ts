import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
${({theme}) => css`
    width: 100%;
    height: 50px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px;
    border-color: wheat;
    `}
`;

export const Title = styled.Text`
${({theme}) => css`
    font-size: 18px;
    color: ${theme.colors.text};
    `}
`;