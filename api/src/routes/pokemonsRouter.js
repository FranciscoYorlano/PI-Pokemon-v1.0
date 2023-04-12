const { Router } = require("express");

// Handlers requires
const {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    createNewPokemonHandler,
} = require("../handlers/pokemonsHandlers");

const pokemonsRouter = Router();

// ======================== Pokemons Routes
pokemonsRouter.get("", getAllPokemonsHandler);

pokemonsRouter.get("/name", getPokemonByNameHandler);

pokemonsRouter.get("/:id", getPokemonByIdHandler);

pokemonsRouter.post("", createNewPokemonHandler);

module.exports = pokemonsRouter;
