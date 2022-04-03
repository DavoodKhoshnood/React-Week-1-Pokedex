import React from "react";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

import "./App.css";

const arrayOfAbilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();

const App = () => (
  <>
    <div>
      <Logo appName="Pokedex" team="CYF" handleClick = {logWhenClicked} />
      <BestPokemon abilities={arrayOfAbilities} />
      <CaughtPokemon date={date} />
      <PokemonCity />
      <PokemonMovesSelector />
    </div>
  </>
);

const logWhenClicked = () => {
  console.log("Button clicked!");
};


export default App;
