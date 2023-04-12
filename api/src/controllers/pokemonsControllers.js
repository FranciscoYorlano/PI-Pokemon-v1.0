const axios = require("axios");

// PokeAPI
require("dotenv").config();
const { EXT_API_URL } = process.env;

// REGEX
const REGEX_URL =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

// Models
const Pokemon = require("../db");

// ======================== Pokemons templates creators

const apiPokemonTemplateCreator = (pokemon) => {
    const types = pokemon.types.map((t) => t.type.name);

    return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        life: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        types: types,
    };
};

// ======================== Pokemons Controllers

const getAllPokemons = () => {};

const getPokemonByName = (name) => {};

/*
    GET | /pokemons/:idPokemon
    Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
    El pokemon es recibido por parámetro (ID).
    Tiene que incluir los datos del tipo de pokemon al que está asociado.
    Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
*/
const getPokemonById = async (id, source) => {
    if (source === "apiExt") {
        try {
            const response = await axios.get(`${EXT_API_URL}/pokemon/${id}`);
            return apiPokemonTemplateCreator(response.data);
        } catch (error) {
            if (error.message === "Request failed with status code 404") {
                throw new Error(`Id ${id} not found in ${source}`);
            } else {
                throw new Error(error.message);
            }
        }
    }

    if (source === "db") {
        return { source: source, api: EXT_API_URL };
    }
};

/*
POST | /pokemons
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (al menos uno).
*/
const createNewPokemon = async (pokemon) => {
    const { name, image, life, attack, defense, speed, height, weight, types } =
        pokemon;

    if (!name) {
        throw new Error("Pokemon name is required.");
    }

    if (!image) {
        throw new Error("Pokemon image url is required.");
    }

    if (name.length > 40) {
        throw new Error(
            "Pokemon name should not be longer than 40 characters."
        );
    }

    if (!REGEX_URL.test(image)) {
        throw new Error("Pokemon image url is invalid.");
    }

    if (
        life < 0 ||
        attack < 0 ||
        defense < 0 ||
        speed < 0 ||
        height < 0 ||
        weight < 0
    ) {
        throw new Error("Pokemon stats must be greater than or equal to zero.");
    }

    return "ok";
};

module.exports = {
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
    createNewPokemon,
};
