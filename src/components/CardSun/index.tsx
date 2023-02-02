import AnimatedLottieView from 'lottie-react-native';
import React, { memo } from 'react';
import sun from '../../assets/sun.json';
import * as S from './styles';



function CardSun() {
  return <S.CardPlanet>
<AnimatedLottieView style={{width: 180}} autoPlay source={sun} loop />
  </S.CardPlanet>
}

export default memo(CardSun);