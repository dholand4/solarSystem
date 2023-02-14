import React, {ReactNode} from 'react';
import {Container, Content} from './styles';

interface AccordionBodyProps {
  children: ReactNode | ReactNode[];
}

export function AccordionBody({children}: AccordionBodyProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
