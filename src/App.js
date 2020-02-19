import React, { Component } from "react";
import PokecardList from "./PokecardList";
import SearchBox from "./SearchBox";
import { pokemon } from "./pokemon";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemon,
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
      <h1 className="f1">POKEDEX</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <PokecardList pokemon={filteredPokemon} />
      <p>More Pokémon coming soon</p>
      </div>
    );
  }
}

export default App;