import React from "react";
import Pokecard from "./Pokecard";

const PokecardList = ({ pokemon }) => {
  return (
    <div>
      {
        pokemon = pokemon.map((singlePokemon, i) => {
          return (
            <Pokecard
              key={i}
              id={pokemon[i].id}
              name={pokemon[i].name}
              description={pokemon[i].description}
            />
          );
        })
      }
    </div>
  );
}

export default PokecardList;