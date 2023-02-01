import React, { useContext } from 'react';

import AnimatedLottieView from 'lottie-react-native';


import astronaut from '../../assets/astronaut.json';

import * as S from './styles';
import ButtonGlobal from '../../components/Button';
import { ThemeContext } from 'styled-components';

export function Welcome() {
  const { colors } = useContext(ThemeContext);
  
    return <S.Container>
      <S.title>
        Conheça os planetas do nosso{'\n'}Sistema Solar!
      </S.title>
      <AnimatedLottieView style={{width: 350, marginBottom: 50}} autoPlay source={astronaut} loop />
      <ButtonGlobal text='Vamos lá' color={colors.button_welcome} /> 
      


    </S.Container>
}