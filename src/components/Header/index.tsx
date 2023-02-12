import React, { memo, useContext } from 'react';
import {Feather} from '@expo/vector-icons';

import * as S from './styles';
import { ThemeContext } from 'styled-components';

interface Planets {
  Image: string;
  text: string;
  action?: () => void;
}

function Header({Image, text, action}: Planets) {
  const { colors } = useContext(ThemeContext);
  
  return <>
     <S.Header>
      <S.Back onPress={action}>
      <Feather name="chevron-left" size={35} color={colors.background} />
      </S.Back>
    <S.Card>
    <S.Image source={Image}></S.Image>
    <S.title>{text}</S.title>
    </S.Card>
  </S.Header>
  </>

}
export default memo(Header);