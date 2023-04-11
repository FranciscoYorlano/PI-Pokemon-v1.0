const { Router } = require("express");

const typesRouter = Router();

// Handlers
const { getAllTypesHandler } = require("../handlers/typesHandlers");

// Pokemons Routes

typesRouter.get("", getAllTypesHandler);

module.exports = typesRouter;
