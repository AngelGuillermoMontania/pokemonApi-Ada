import React from "react";
import styles from "./cardPokemon.module.css";
import { FaRegStar, FaStar } from "react-icons/fa"; // Iconos favoritos

export default function CardPokemon({ name }) {
  return (
    <div className={styles.card}>
      {/* <FaRegStar />
      <FaStar /> */}
      <h2>{name}</h2>
      {/* <img src={image} alt="pokemon" /> */}
      {/* TYPES? */}
    </div>
  );
}
