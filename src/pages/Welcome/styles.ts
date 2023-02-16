import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${theme.colors.white};
`;
export const SubTitle = styled.Text`
  font-size: 26px;
  color: ${theme.colors.white};
`;

export const ContainerTitle = styled.View`
  align-items: flex-end;
  position: absolute;
  top: 70px;
  right: 30px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 70px;
  right: 30px;
`;
