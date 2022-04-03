import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  const updateCity = (event) => setCity(event.target.value);
  return (
    <div>
      <input type="text" onKeyDown={updateCity}/>
      <p>Welcome to the city of {city.length>0?city:"..."}</p>
    </div>
  );
}

export default PokemonCity;
