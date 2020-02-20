import React from "react";

const Pokecard = (props) => {
  const { id, name, description, types, resistances, weaknesses } = props;
  return (
    <div className="measure-narrow tc bg-lightest-blue dib br4 pa3 ma2 grow bw2 shadow-5">
      <img className="ba br-100 pa2 bw1 bg-washed-blue" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon"/>
      <h2>#{id} {name}</h2>
      <p className="ba br-pill pa2 bw1 bg-washed-blue">{types}</p>
      <p>{description}</p>
      <p className="ba br pa2 bw1 bg-light-green">Resistances:<br /> {resistances}</p>
      <p className="ba br pa2 bw1 bg-light-red">Weaknesses:<br /> {weaknesses}</p>
    </div>
  )
}

export default Pokecard