import { useRoute } from '@react-navigation/native';
import React from 'react';
import Header from '../../components/Header';
import planets from '../../constants/planets';
import { StatusBar } from "expo-status-bar";

import * as Styles from './styles';

function About() {
  const route = useRoute();
  const {planetsId} = route.params;
  const item = planets.filter(i => i.id === planetsId)[0];


  return (
    
    <Styles.Container>
 <StatusBar backgroundColor="transparent" style="light" />
      <Header key={item.id} Image={item.image} text={item.title} />


    </Styles.Container>
);
}

export default About;
