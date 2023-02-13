import React, { useState } from 'react';

import Card from '../../components/Card';
import {FlatList} from 'react-native';

import planets from '../../constants/planets';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';



export function Home() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

const navigation = useNavigation();

function handleNavigation(planetsId: string) {
  setBackgroundColor("black");
  navigation.navigate('About', {
    planetsId,
  });
}

return <S.Container>
  <FlatList
data={planets}
keyExtractor={item => item.id.toString()}
showsVerticalScrollIndicator={false}
renderItem={({ item: planets}) => 
<Card Image={planets.image} textId={planets.id} text={planets.title} action={() => {
  handleNavigation(planets.id);
}}/>
}
>
</FlatList>


</S.Container>
}