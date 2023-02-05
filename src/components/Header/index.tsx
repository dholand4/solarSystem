import React, { memo } from 'react';

import * as S from './styles';

interface Planets {
  Image: string;
  text: string;
}

function Header({Image, text}: Planets) {
  return <>
     <S.Header>

    <S.Card>
    <S.Image source={Image}></S.Image>
    <S.title>{text}</S.title>
    </S.Card>

  

  </S.Header>
  </>

}

export default memo(Header);