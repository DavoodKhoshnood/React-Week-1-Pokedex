import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const caughtClick = () => {
    const addCaught = "My new Pokemon! No "+(caught.length+1);
    const newCaught = [...caught,addCaught];
    setCaught(newCaught);
  };
  return (
  <>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={caughtClick}>Caught Pokemon</button>
    <ul>
      {caught.map((c, index)=> <li key={index}>{c}</li>
        )}
    </ul>
  </>
);
};

export default CaughtPokemon;
