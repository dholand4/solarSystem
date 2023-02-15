import React, { memo } from 'react';

import earth from '../../assets/planets/earth.png';

import * as S from './styles';


interface Planets {
  Image: string;
  text: string;
  textId: string;
}
function Card({Image, text, textId}: Planets) {

  return (
    <S.Container>



    <S.CardPlanet>

    <S.Image source={earth}/>

    </S.CardPlanet>

    <S.CardInfos>
    <S.ContainerTitle>
    <S.Id>#01 </S.Id>
    <S.Title>Planeta Terra</S.Title>
    </S.ContainerTitle>

    <S.InfosPlanets>
    <S.InfoPlanetLeft>

    <S.InfosCards>
    <S.Infos>Gravidade</S.Infos>
    <S.Answers>testando 123</S.Answers>
    </S.InfosCards>

    <S.InfosCards>
    <S.Infos>Densidade</S.Infos>
    <S.Answers>testando 123</S.Answers>
    </S.InfosCards>
    <S.InfosCards>
    <S.Infos>Massa</S.Infos>
    <S.Answers>testando 123</S.Answers>
    </S.InfosCards>

    </S.InfoPlanetLeft>

    <S.InfoPlanetRight>
    <S.InfosCards>
    <S.Infos>Luas</S.Infos>
    <S.Answers>testando 123</S.Answers>
    </S.InfosCards>

    <S.InfosCards>
    <S.Infos>Completa um dia</S.Infos>
    <S.Answers>testando 123</S.Answers>
    </S.InfosCards>

    <S.InfosCards>
    <S.Infos>Completa um ano</S.Infos>
    <S.Answers>testando 123</S.Answers>
    </S.InfosCards>

    </S.InfoPlanetRight>
    </S.InfosPlanets>
    <S.ContainerOrder>
    <S.Order>A terra é o terceiro planeta do sistema solar</S.Order>
    </S.ContainerOrder>


    </S.CardInfos>
    </S.Container>


  )

}

export default memo(Card);