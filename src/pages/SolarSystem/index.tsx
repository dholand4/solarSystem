import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import CardScreen from "../../components/CardScreen";
import { Load } from "../../components/Load";

import MOCK from "../../constants/system";

import * as Styles from "./styles";

function SolarSystem() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Styles.LoadingScreen>
      <Load />
    </Styles.LoadingScreen>
  ) : (
    <>
      <Styles.Container>
        <FlatList
          data={MOCK}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          renderItem={({ item }) => (
            <CardScreen
              title={item.title}
              image={item.image}
              text={item.text}
            />
          )}
        />
      </Styles.Container>
    </>
  );
}

export default SolarSystem;
