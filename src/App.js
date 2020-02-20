import React, { Component } from "react";
import PokecardList from "./PokecardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://devleni.github.io/pokemon-gen1/pokemon.json")
      .then(response => response.json())
      .then(data => {this.setState({ pokemon: data })});
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
      </div>
    );
  }
}

export default App;