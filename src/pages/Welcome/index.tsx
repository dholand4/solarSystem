import React, { useContext } from 'react';

import AnimatedLottieView from 'lottie-react-native';


import astronaut from '../../assets/astronaut.json';

import * as S from './styles';
import ButtonGlobal from '../../components/Button';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
  const { colors } = useContext(ThemeContext);

  const {navigate} = useNavigation();

  function handleNavigation() {
      navigate('Home')
  }
  
    return <S.Container>
      <S.Title>
        Conheça tudo sobre o nosso{'\n'}Sistema Solar!
      </S.Title>
      <AnimatedLottieView style={{width: 600, }} autoPlay source={astronaut} loop />

      <ButtonGlobal text='Entrar' color={colors.primary} action={handleNavigation} /> 
    </S.Container>
}