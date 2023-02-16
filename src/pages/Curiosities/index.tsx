import React, { useEffect, useState } from "react";
import { AccordionBody } from "../../components/Accordion/AccordionBody";
import { AccordionItem } from "../../components/Accordion/AccordionItem";

import { curiosities } from "../../constants/curiosities";
import background from "../../assets/backgrounds/curiosities.png";

import * as Styles from "./styles";
import { Load } from "../../components/Load";

function Curiosities() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Styles.LoadingScreen>
      <Load />
    </Styles.LoadingScreen>
  ) : (
    <>
      <Styles.Container>
        <Styles.Background source={background}>
          <Styles.Content showsVerticalScrollIndicator={false}>
            {curiosities.map((current, index) => (
              <AccordionItem
                title={current.categoryName}
                id={index}
                key={index}
              >
                {curiosities[index].options.map((currentOption) => (
                  <AccordionBody key={currentOption.id}>
                    <Styles.SubTitle>{currentOption.answer}</Styles.SubTitle>
                  </AccordionBody>
                ))}
              </AccordionItem>
            ))}
          </Styles.Content>
        </Styles.Background>
      </Styles.Container>
    </>
  );
}

export default Curiosities;
