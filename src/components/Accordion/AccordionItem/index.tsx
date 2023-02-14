import React, {ReactNode, useState} from 'react';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import {
  ContentIconAccordion,
  ContentIconService,
  WrapperQuestion,
  ContentText,
  Content,
  Title,
} from './styles';

import {Ionicons} from '@expo/vector-icons';
import theme from '../../../global/styles/theme';

interface ItemProps {
  children: ReactNode | ReactNode[];
  icon?: string;
  title: string;
  id: number;
}

export function AccordionItem({children, icon, title, id}: ItemProps) {
  const [currentId, setCurrentId] = useState(-1);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <>
      <Content
        activeOpacity={0.9}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setCurrentId(currentId === -1 ? id : -1);
        }}>
        {icon && (
          <ContentIconService>
          </ContentIconService>
        )}
        <ContentText>
          <Title>{title}</Title>
        </ContentText>
        <ContentIconAccordion>
          <Ionicons name={'chevron-down'} color={theme.colors.white} size={28} style={{
              transform: [{rotate: id === currentId ? '180deg' : '0deg'}],
            }} />
        </ContentIconAccordion>
      </Content>

      {id === currentId && <WrapperQuestion>{children}</WrapperQuestion>}
    </>
  );
}
