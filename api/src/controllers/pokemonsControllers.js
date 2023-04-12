// PokeAPI
const EXT_API_URL = "https://pokeapi.co/api/v2";

const apiPokemonTemplateCreator = (pokemon) => {
    const types = pokemon.types.map((t) => t.type.name);

    return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.back_default,
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

const getPokemonById = (id) => {};

const createNewPokemon = (pokemon) => {};

module.exports = {
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
    createNewPokemon,
};
