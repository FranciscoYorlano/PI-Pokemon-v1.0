// ======================== Styles
import styles from "./home.module.css";

// ======================== Components
import Card from "../../components/card/Card";

// ======================== Hooks
import { useState } from "react";

const pokemons = [
    {
        id: 1,
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        life: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        height: 7,
        weight: 69,
        types: ["grass", "poison"],
    },
    {
        id: 2,
        name: "ivysaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        life: 60,
        attack: 62,
        defense: 63,
        speed: 60,
        height: 10,
        weight: 130,
        types: ["grass", "poison"],
    },
    {
        id: 3,
        name: "venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        life: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        height: 20,
        weight: 1000,
        types: ["grass", "poison"],
    },
    {
        id: 4,
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        life: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        height: 6,
        weight: 85,
        types: ["fire"],
    },
    {
        id: 5,
        name: "charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        life: 58,
        attack: 64,
        defense: 58,
        speed: 80,
        height: 11,
        weight: 190,
        types: ["fire"],
    },
    {
        id: 6,
        name: "charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        life: 78,
        attack: 84,
        defense: 78,
        speed: 100,
        height: 17,
        weight: 905,
        types: ["fire", "flying"],
    },
    {
        id: 7,
        name: "squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        life: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        height: 5,
        weight: 90,
        types: ["water"],
    },
    {
        id: 8,
        name: "wartortle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        life: 59,
        attack: 63,
        defense: 80,
        speed: 58,
        height: 10,
        weight: 225,
        types: ["water"],
    },
    {
        id: 9,
        name: "blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        life: 79,
        attack: 83,
        defense: 100,
        speed: 78,
        height: 16,
        weight: 855,
        types: ["water"],
    },
    {
        id: 10,
        name: "caterpie",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        life: 45,
        attack: 30,
        defense: 35,
        speed: 45,
        height: 3,
        weight: 29,
        types: ["bug"],
    },
    {
        id: 11,
        name: "metapod",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        life: 50,
        attack: 20,
        defense: 55,
        speed: 30,
        height: 7,
        weight: 99,
        types: ["bug"],
    },
    {
        id: 12,
        name: "butterfree",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        life: 60,
        attack: 45,
        defense: 50,
        speed: 70,
        height: 11,
        weight: 320,
        types: ["bug", "flying"],
    },
    {
        id: 13,
        name: "weedle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        life: 40,
        attack: 35,
        defense: 30,
        speed: 50,
        height: 3,
        weight: 32,
        types: ["bug", "poison"],
    },
    {
        id: 14,
        name: "kakuna",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        life: 45,
        attack: 25,
        defense: 50,
        speed: 35,
        height: 6,
        weight: 100,
        types: ["bug", "poison"],
    },
    {
        id: 15,
        name: "beedrill",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        life: 65,
        attack: 90,
        defense: 40,
        speed: 75,
        height: 10,
        weight: 295,
        types: ["bug", "poison"],
    },
    {
        id: 16,
        name: "pidgey",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        life: 40,
        attack: 45,
        defense: 40,
        speed: 56,
        height: 3,
        weight: 18,
        types: ["normal", "flying"],
    },
    {
        id: 17,
        name: "pidgeotto",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        life: 63,
        attack: 60,
        defense: 55,
        speed: 71,
        height: 11,
        weight: 300,
        types: ["normal", "flying"],
    },
    {
        id: 18,
        name: "pidgeot",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        life: 83,
        attack: 80,
        defense: 75,
        speed: 101,
        height: 15,
        weight: 395,
        types: ["normal", "flying"],
    },
    {
        id: 19,
        name: "rattata",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        life: 30,
        attack: 56,
        defense: 35,
        speed: 72,
        height: 3,
        weight: 35,
        types: ["normal"],
    },
    {
        id: 20,
        name: "raticate",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        life: 55,
        attack: 81,
        defense: 60,
        speed: 97,
        height: 7,
        weight: 185,
        types: ["normal"],
    },
    {
        id: 21,
        name: "spearow",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        life: 40,
        attack: 60,
        defense: 30,
        speed: 70,
        height: 3,
        weight: 20,
        types: ["normal", "flying"],
    },
    {
        id: 22,
        name: "fearow",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        life: 65,
        attack: 90,
        defense: 65,
        speed: 100,
        height: 12,
        weight: 380,
        types: ["normal", "flying"],
    },
];

const Home = () => {
    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.selectContainer}>
                    <span>Filters:</span>
                    <select>
                        <option selected>All types</option>
                        <option value="normal">normal Q</option>
                        <option value="fighting">fighting</option>
                        <option value="poison">poison</option>
                        <option value="electric">electric</option>
                    </select>
                    <select>
                        <option selected>All sources</option>
                        <option value="created">Created</option>
                        <option value="PokeAPI">PokeAPI</option>
                    </select>
                </div>
                <div className={styles.selectContainer}>
                    <span>Sort: </span>
                    <select>
                        <option value="alphabeticalAsc">
                            Alphabetical (A-Z)
                        </option>
                        <option value="alphabeticalDesc">
                            Alphabetical (Z-A)
                        </option>
                        <option value="attackAsc">Attack (low to high)</option>
                        <option value="attackDesc">Attack (high to low)</option>
                    </select>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                        <Card pokemon={pokemon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
