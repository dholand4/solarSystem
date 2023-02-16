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
  const [planets, setPlanets] = useState({} as PlanetInfo);

  useEffect(() => {
    const planetId = "earth";

    async function getPokemonDetail() {
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

        setPlanets({
          moons,
          density,
          gravity,
          mass,
          sideralOrbit,
          englishName,
          sideralRotation,
        });
      } catch (error) {
        console.log("DEU ERRO CHAPA");
      }
    }

    getPokemonDetail();
  }, []);

  return (
    <Styles.Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginRight: 21 }} />}
        data={MOCK}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: MOCK }) => (
          <Card
            id={MOCK.id}
            name={MOCK.nameBr}
            gravity={planets.gravity}
            density={planets.density}
            sideralOrbit={planets.sideralOrbit}
            sideralRotation={planets.sideralRotation}
            mass={planets.mass?.massValue ?? 0}
            moons={planets.moons?.length || 0}
            image={MOCK.image}
          />
        )}
      ></FlatList>
    </Styles.Container>
  );
}

export default Planets;
