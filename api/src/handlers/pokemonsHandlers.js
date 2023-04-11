// -> array de pokemons con su información básica
const getAllPokemonsHandler = (req, res) => {
    res.json({ handler: "getAllPokemonsHandler" });
};

// -> array de pokemons que coinciden con el name. Case insensitive
const getPokemonByNameHandler = (req, res) => {
    const { name } = req.query;

    res.json({ handler: "getPokemonByNameHandler", name: name });
};

// -> pokemon detallado que coincide con el id (id o uuid)
const getPokemonByIdHandler = (req, res) => {
    const { id } = req.params;

    res.json({ handler: "getPokemonByIdHandler", id: id });
};

// -> create new pokemon in db
const createNewPokemonHandler = (req, res) => {
    const { pokemon } = req.body;

    res.json({ handler: "createNewPokemonHandler", pokemon: pokemon });
};

module.exports = {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    createNewPokemonHandler,
};
