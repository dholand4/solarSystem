import React from "react";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

type Props = {
  search?: (arg0: string) => void;
};

export function Search({ search }: Props) {
  return (
    <S.Container>
      <S.ContainerSearch>
        <S.Search placeholder="Buscar" onChangeText={search}></S.Search>
        <Feather name="search" size={20} color="#747476" />
      </S.ContainerSearch>
    </S.Container>
  );
}
