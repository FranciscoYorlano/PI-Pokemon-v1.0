import axios from "axios";

// ======================== Env
const BACKEND_URL = "http://localhost:3001";

// ======================== Action Types
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const REMOVE_POKEMON_DETAIL = "REMOVE_POKEMON_DETAIL";

export const GET_ALL_TYPES = "GET_ALL_TYPES";

// ======================== Action Creators
export const getAllPokemons = () => {
    return async (dispatch) => {
        const response = await axios.get(`${BACKEND_URL}/pokemons`);
        const pokemons = response.data;
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
    };
};

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${BACKEND_URL}/pokemons/${id}`);
        const pokemon = response.data;
        dispatch({ type: GET_POKEMON_DETAIL, payload: pokemon });
    };
};

export const removePokemonDetail = () => {
    return {
        type: REMOVE_POKEMON_DETAIL,
    };
};

export const getAllTypes = () => {};
