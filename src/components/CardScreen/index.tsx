import React, { memo } from "react";

import * as S from "./styles";

interface InfosSolar {
  title: string;
  image: string;
  text: string;
}

function CardScreen({ title, image, text }: InfosSolar) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Card>
        <S.Image source={image} />
      </S.Card>
      <S.CardInfos>
        <S.Text>{text}</S.Text>
      </S.CardInfos>
    </S.Container>
  );
}
export default memo(CardScreen);
