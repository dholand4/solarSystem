import { Dimensions } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const { width } = Dimensions.get("window");
export const Container = styled.View`
  height: ${width / -5}px;
  width: ${width * 1}px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const Card = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CardInfos = styled.View`
  height: 45%;
  width: 100%;
  padding: 20px;
`;

export const Text = styled.Text`
  font-size: 16.2px;
  text-align: justify;
  color: white;
  font-weight: 300;
  line-height: 24px;
`;

export const Image = styled.Image`
  width: 395px;
  border-radius: 15px;
  height: 400px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: 400;
  text-align: justify;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
`;
