import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import planets from '../../constants/planets';
import { StatusBar } from "expo-status-bar";

import * as Styles from './styles';
import { ThemeContext } from 'styled-components';

function About() {
  const route = useRoute();
  const navigation = useNavigation();
  const {planetsId} = route.params;
  const item = planets.filter(i => i.id === planetsId)[0];

  return (
    <Styles.Container>
    <StatusBar backgroundColor="transparent" style="light" />
    <Header key={item.id} Image={item.image} text={item.title} >
      
    </Header>

    
</Styles.Container>
);
}

export default About;
