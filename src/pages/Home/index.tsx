import React from 'react';

import Card from '../../components/Card';

import planets from '../../constants/planets';

import * as S from './styles';

export function Home() {

    return <S.Container>
    <S.List
    data={planets}
    renderItem={({ item }) => <Card Image={item.image} text={item.title} />}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    numColumns={2}
    />

    </S.Container>
}