import { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import styles from "./containCardsPokemon.module.css";

export default function ContainCardsPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // pokeapi
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  // Investigar Promise.all([...])
  // url para detalle de personaje
  // https://pokeapi.co/api/v2/pokemon/1

  return (
    <div className={styles.containCard}>
      {/* Al utilizar promise.all enviar mas info a cada Card */}
      {pokemons.map((pokemon) => {
        return (
          <CardPokemon id={pokemon.id} key={pokemon.name} name={pokemon.name} />
        );
      })}
    </div>
  );
}
