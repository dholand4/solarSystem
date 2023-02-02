import React from 'react';

import Card from '../../components/Card';
import {FlatList} from 'react-native';

import planets from '../../constants/planets';

import * as S from './styles';

export function Home() {

    return <S.Container>
    <FlatList
    data={planets}
    renderItem={({ item }) => <Card Image={item.image} text={item.title} />}
    keyExtractor={item => item.id}
    numColumns={2}
    showsVerticalScrollIndicator={false} >
    </FlatList>


    </S.Container>
}