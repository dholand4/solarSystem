import React, { memo } from 'react';

import * as S from './styles';

interface Props {
  Image: string;
  text: string;
  action?: () => void;
}

function Card({Image, text}: Props) {
  return <S.CardPlanet>
    <S.Image source={Image}></S.Image>
    <S.title>{text}</S.title>
  </S.CardPlanet>
}

export default memo(Card);