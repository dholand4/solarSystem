import React, { memo } from 'react';

import * as S from './styles';


interface Planets {
  id: string;
  name: string;
  gravity: number;
  density: number;
  sideralOrbit: number;
	sideralRotation: number;
  mass: number;
  moons: { moon: string }[] | null;

  image: string;
}
function Card({id, name, gravity, density, sideralOrbit, sideralRotation, mass, moons, image}: Planets) {

  return (
    <S.Container>

    <S.CardPlanet>

<S.Image source={image}/>

</S.CardPlanet>

<S.CardInfos >
<S.ContainerTitle>
<S.Id>#0{id} </S.Id>
<S.Title>{name}</S.Title>
</S.ContainerTitle>

<S.InfosPlanets>
<S.InfoPlanetLeft>

<S.InfosCards>
<S.Infos>Gravidade</S.Infos>
<S.Answers>{gravity} m/s²</S.Answers>
</S.InfosCards>

<S.InfosCards>
<S.Infos>Densidade</S.Infos>
<S.Answers>{density} g/cm 3</S.Answers>
</S.InfosCards>
<S.InfosCards>
<S.Infos>Massa</S.Infos>
<S.Answers>{mass} Kg</S.Answers>
</S.InfosCards>

</S.InfoPlanetLeft>

<S.InfoPlanetRight>
<S.InfosCards>
<S.Infos>Luas</S.Infos>
<S.Answers>{moons}</S.Answers>
</S.InfosCards>

<S.InfosCards>
<S.Infos>Completa um dia</S.Infos>
<S.Answers>{sideralRotation} Horas</S.Answers>
</S.InfosCards>

<S.InfosCards>
<S.Infos>Completa um ano</S.Infos>
<S.Answers>{sideralOrbit} Dias</S.Answers>
</S.InfosCards>

</S.InfoPlanetRight>
</S.InfosPlanets>
<S.ContainerOrder>
<S.Order>Os dias e horas são baseado nos dados terrestres!</S.Order>

</S.ContainerOrder>


</S.CardInfos>
    
    </S.Container>


  )

}

export default memo(Card);