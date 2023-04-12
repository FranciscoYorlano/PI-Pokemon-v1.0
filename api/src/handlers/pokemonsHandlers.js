// Controllers
const {
    getAllPokemons,
    getPokemonsByName,
    getPokemonById,
    createNewPokemon,
} = require("../controllers/pokemonsControllers");

// ======================== Handlers

// falta
const getAllPokemonsHandler = (req, res) => {
    // -> array de pokemons (id, name, types)
    res.json({ handler: "getAllPokemonsHandler" });
};

const getPokemonsByNameHandler = async (req, res) => {
    // -> array de pokemons con name = name. Case insensitive
    const { name } = req.query;

    try {
        const pokemons = await getPokemonsByName(name);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPokemonByIdHandler = async (req, res) => {
    // -> pokemon con id = id (apto uuid)
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "apiExt";

    try {
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createNewPokemonHandler = async (req, res) => {
    // -> create new pokemon
    const pokemon = req.body;

    try {
        const response = await createNewPokemon(pokemon);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllPokemonsHandler,
    getPokemonsByNameHandler,
    getPokemonByIdHandler,
    createNewPokemonHandler,
};
