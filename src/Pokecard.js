import React from "react";

const Pokecard = (props) => {
  const { id, name, description } = props;
  return (
    <div className="tc bg-lightest-blue dib br4 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon"/>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Pokecard