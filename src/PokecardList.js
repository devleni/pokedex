import React from "react";
import Pokecard from "./Pokecard";

const PokecardList = ({ pokemon }) => {
  return (
    <div>
      <Pokecard id={pokemon[0].id} name={pokemon[0].name} description={pokemon[0].description} />
      <Pokecard id={pokemon[3].id} name={pokemon[3].name} description={pokemon[3].description} />
      <Pokecard id={pokemon[6].id} name={pokemon[6].name} description={pokemon[6].description} />
    </div>
  )
}

export default PokecardList;