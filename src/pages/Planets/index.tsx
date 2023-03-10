import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/CardPlanets";
import { Load } from "../../components/Load";

import MOCK from "../../constants/planets";

import api from "../../service/api";

import * as Styles from "./styles";

const { width } = Dimensions.get("window");

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
  const [load, setLoad] = useState<boolean>(true);
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
      } finally {
        setTimeout(() => {
          setLoad(false);
        }, 1500);
      }
    }

    MOCK.forEach((planet) => {
      getPlanetDetails(planet.name);
    });
  }, []);

  return load ? (
    <Styles.LoadingScreen>
      <Load />
    </Styles.LoadingScreen>
  ) : (
    <>
      <Styles.Container>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
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
    </>
  );
}

export default Planets;
