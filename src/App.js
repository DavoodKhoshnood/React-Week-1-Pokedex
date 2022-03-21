import React from 'react'
import Logo from './Logo.js'
import BestPokemon from './BestPokemon.js'
import CaughtPokemon from './CaughtPokemon.js'

import './App.css'

const arrayOfAbilities = ['Anticipation', 'Adaptability', 'Run-Away']
const date = new Date().toLocaleDateString()

const App = () => (
  <>
    <div>
      <Logo appName="Pokedex" team="CYF" />
      <BestPokemon abilities={arrayOfAbilities} />
      <CaughtPokemon date={date} />
    </div>
  </>
)

export default App
