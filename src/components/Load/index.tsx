import React from "react";

import LottieView from "lottie-react-native";
import load from "../../assets/gifs/load.json";

import * as S from "./styles";

export function Load() {
  return (
    <S.Container>
      <LottieView autoPlay source={load} loop style={{ width: 250 }} />
    </S.Container>
  );
}
