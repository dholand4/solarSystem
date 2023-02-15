import React, { useEffect } from 'react';
import { AccordionBody } from '../../components/Accordion/AccordionBody';
import { AccordionItem } from '../../components/Accordion/AccordionItem';

import { curiosities } from '../../constants/curiosities';
import background from '../../assets/backgrounds/curiosities.png';



import * as Styles from './styles';

function Curiosities() {
  return (
    <Styles.Container>
      <Styles.Background source={background}>
      <Styles.Content
      showsVerticalScrollIndicator={false}
      >

      {curiosities.map((current, index) => (
            <AccordionItem
              title={current.categoryName}
              id={index}
              key={current.categoryName}>

              {curiosities[index].options.map((currentOption) => (

                  <AccordionBody>
                    <Styles.SubTitle>{currentOption.answer}</Styles.SubTitle>
                  </AccordionBody>

    ))}
    </AccordionItem>
    ))}
    </Styles.Content>  
    </Styles.Background>
    </Styles.Container>

  );
}

export default Curiosities;
