import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.TextInput`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 400;    
  `}
  `;

export const ContainerSearch = styled.View`
width: 370px;
flex-direction: row;
padding: 20px 25px 20px 25px;
border-radius: 15px;
border-width: 1px;
justify-content: space-between;
align-items: center;
`;