const { Router } = require("express");

const pokemonsRouter = Router();

// Handlers

// Pokemons Routes

pokemonsRouter.get("");

pokemonsRouter.get("/:id");

pokemonsRouter.get("/");

pokemonsRouter.post("");

module.exports = pokemonsRouter;
