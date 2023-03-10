import { Dimensions } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const { width } = Dimensions.get("window");
export const Container = styled.View`
  height: ${width / -5}px;
  width: ${width * 1}px;
  border-radius: 25px;
`;

export const CardPlanet = styled.View`
  height: 53%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CardInfos = styled.View`
  height: 50%;
  width: 100%;
  padding: 20px;
  border-radius: 25px;
  background-color: ${theme.colors.secondarytrans};
  justify-content: center; ;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: -30px;
`;

export const Title = styled.Text`
  font-size: 19px;

  color: ${theme.colors.white};
`;

export const Id = styled.Text`
  font-size: 19px;
  color: ${theme.colors.white};
`;

export const Image = styled.Image`
  width: 325px;
  height: 325px;
`;

export const Infos = styled.Text`
  font-size: 15px;
  color: ${theme.colors.primary};
`;

export const Answers = styled.Text`
  font-size: 15px;
  color: ${theme.colors.white};
`;

export const InfosPlanets = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Order = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary};
  margin-bottom: 5px;
`;
export const ContainerOrder = styled.View`
  align-items: center;
  margin-top: -15px;
`;

export const InfosCards = styled.View`
  margin-bottom: 40px;
`;

export const InfoPlanetLeft = styled.View``;

export const InfoPlanetRight = styled.View``;
