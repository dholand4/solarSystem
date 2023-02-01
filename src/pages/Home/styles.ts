import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
flex: 1;
padding-top: 30px;
align-items: center;
background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
font-size: 23px;
font-weight: 400;
margin-bottom: 50px;
color: ${theme.colors.text};
`;

export const List = styled.FlatList`
margin-bottom: 25px;
`;

export const ContainerSearch = styled.View`
padding: 15px;
`;