import React, { memo } from 'react';
import background from '../../assets/background-card.png'; 
import { FadeAnimation } from '../../components/FadeAnimation';

import * as S from './styles';


interface Planets {
  Image: string;
  text: string;
  textId: string;
  action?: () => void;
}
function Card({Image, text, textId,action}: Planets) {

  return (
    <S.CardPlanet onPress={action}>

      <S.BackImage source={background}></S.BackImage>
      <S.TextId>#{textId}</S.TextId>
      <S.title>{text}</S.title>
    <S.Planet>
    <FadeAnimation>
    <S.Image source={Image}></S.Image>
        </FadeAnimation>
   
    
    </S.Planet>
    </S.CardPlanet>

  )

}

export default memo(Card);