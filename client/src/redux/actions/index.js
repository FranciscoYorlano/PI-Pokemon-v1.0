import axios from "axios";

// ======================== Env
const BACKEND_URL = "http://localhost:3001";

// ======================== Action Types
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_ALL_TYPES = "GET_ALL_TYPES";

// ======================== Action Creators
export const getAllPokemons = () => {};

export const getPokemonDetail = (id) => {};

export const getAllTypes = () => {};
