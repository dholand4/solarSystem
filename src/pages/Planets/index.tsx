import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";

import MOCK from "../../constants/planets";

import api from "../../service/api";

import * as Styles from "./styles";

export interface PlanetInfo {
  moons: { moon: string }[] | null;
  density: number;
  gravity: number;
  mass: {
    massValue: number;
  };
  sideralOrbit: number;
  englishName: string;
  sideralRotation: number;
}

function Planets() {
  const [planets, setPlanets] = useState<Record<string, PlanetInfo>>({});

  useEffect(() => {
    async function getPlanetDetails(planetId: string) {
      try {
        const response = await api.get(`/bodies/${planetId}`);
        const {
          moons,
          density,
          gravity,
          mass,
          sideralOrbit,
          englishName,
          sideralRotation,
        } = response.data;

        setPlanets((prevPlanets) => ({
          ...prevPlanets,
          [planetId]: {
            moons,
            density,
            gravity,
            mass,
            sideralOrbit,
            englishName,
            sideralRotation,
          },
        }));
      } catch (error) {
        console.log("DEU ERRO CHAPA");
      }
    }

    MOCK.forEach((planet) => {
      getPlanetDetails(planet.name);
    });
  }, []);

  return (
    <Styles.Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginRight: 21 }} />}
        data={MOCK}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: mock }) => (
          <Card
            id={mock.id}
            name={mock.nameBr}
            gravity={planets[mock.name]?.gravity}
            density={planets[mock.name]?.density}
            sideralOrbit={planets[mock.name]?.sideralOrbit}
            sideralRotation={planets[mock.name]?.sideralRotation}
            mass={planets[mock.name]?.mass?.massValue ?? 0}
            moons={planets[mock.name]?.moons?.length || 0}
            image={mock.image}
          />
        )}
      ></FlatList>
    </Styles.Container>
  );
}

export default Planets;
