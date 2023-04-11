const { Router } = require("express");

const pokemonsRouter = Router();

// Handlers
const {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    createNewPokemonHandler,
} = require("../handlers/pokemonsHandlers");

// Pokemons Routes
pokemonsRouter.get("", getAllPokemonsHandler);

pokemonsRouter.get("/name", getPokemonByNameHandler);

pokemonsRouter.get("/:id", getPokemonByIdHandler);

pokemonsRouter.post("", createNewPokemonHandler);

module.exports = pokemonsRouter;
