import React, { useContext } from 'react';
import background from '../../assets/backgrounds/welcome.png';

import * as S from './styles';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

export function Welcome() {
  const { colors } = useContext(ThemeContext);

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('Home_Stack')
  }
  
    return <S.Container>
           <S.Background source={background}>
          <S.Content>


    <S.ContainerTitle>
          <S.SubTitle>Sistema Solar</S.SubTitle>
    <S.Title>Explore as Maravilhas do Espaço!</S.Title>

    </S.ContainerTitle>

    <S.BackButton onPress={handleNavigation}>
    <Feather name="chevron-right" size={45} color={colors.white} />
    </S.BackButton>
  


    </S.Content>
    </S.Background>
    </S.Container>
 

}