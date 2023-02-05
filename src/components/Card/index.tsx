import React, { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface Planets {
  Image: string;
  text: string;
  action?: () => void;
}

function Card({Image, text, action}: Planets) {
  return <S.CardPlanet onPress={action}>
    <S.Image source={Image}></S.Image>
    <S.title>{text}</S.title>
  </S.CardPlanet>
}

export default memo(Card);