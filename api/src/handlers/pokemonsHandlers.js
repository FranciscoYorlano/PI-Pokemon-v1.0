const getAllPokemonsHandler = (req, res) => {
    res.send("getAllPokemonsHandler");
};

const getPokemonByIdHandler = (req, res) => {
    res.send("getPokemonByIdHandler ");
};

const getPokemonByNameHandler = (req, res) => {
    res.send("getPokemonByNameHandler");
};

const createNewPokemonHandler = (req, res) => {
    res.send("createNewPokemonHandler");
};

module.exports = {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    createNewPokemonHandler,
};
