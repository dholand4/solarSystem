import React, { memo, useContext } from 'react';
import {Feather} from '@expo/vector-icons';

import * as S from './styles';
import { ThemeContext } from 'styled-components';
import background from '../../assets/background-card.png'; 

interface Planets {
  Image: string;
  text: string;
  action?: () => void;
}

function Header({Image, text, action}: Planets) {
  const { colors } = useContext(ThemeContext);
  
  return <>
     <S.Header>
     <S.BackImage source={background}></S.BackImage>
      <S.Back onPress={action}>
<Feather name="chevron-left" size={30} color={colors.background} />
      </S.Back>
    <S.Card>
    <S.Image source={Image}></S.Image>
    <S.title>{text}</S.title>
    </S.Card>
  </S.Header>
  </>

}
export default memo(Header);