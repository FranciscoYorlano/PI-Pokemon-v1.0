// Controllers
const { getAllPokemons } = require("../controllers/pokemonsControllers");

// ======================== Handlers

const getAllPokemonsHandler = (req, res) => {
    // -> array de pokemons (id, name, types)
    res.json({ handler: "getAllPokemonsHandler" });
};

const getPokemonByNameHandler = (req, res) => {
    // -> array de pokemons con name = name. Case insensitive
    const { name } = req.query;

    res.json({ handler: "getPokemonByNameHandler", name: name });
};

const getPokemonByIdHandler = (req, res) => {
    // -> pokemon con id = id (apto uuid)
    const { id } = req.params;

    res.json({ handler: "getPokemonByIdHandler", id: id });
};

const createNewPokemonHandler = (req, res) => {
    // -> create new pokemon
    const { pokemon } = req.body;

    res.json({ handler: "createNewPokemonHandler", pokemon: pokemon });
};

module.exports = {
    getAllPokemonsHandler,
    getPokemonByNameHandler,
    getPokemonByIdHandler,
    createNewPokemonHandler,
};
