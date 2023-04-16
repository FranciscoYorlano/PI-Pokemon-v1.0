import axios from "axios";

// ======================== Env
const BACKEND_URL = "http://192.168.0.157:3001";

// ======================== Action Types
export const SET_GLOBAL_ERROR = "SET_ERROR";
export const REMOVE_GLOBAL_ERROR = "REMOVE_ERROR";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const REMOVE_POKEMON_DETAIL = "REMOVE_POKEMON_DETAIL";

export const GET_ALL_TYPES = "GET_ALL_TYPES";

export const CREATE_POKEMON = "CREATE_POKEMON";

// ======================== Action Creators
export const setGlobalError = (error) => {
    return {
        type: SET_GLOBAL_ERROR,
        payload: error,
    };
};

export const removeGlobalError = () => {
    return {
        type: REMOVE_GLOBAL_ERROR,
    };
};

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

export const getAllTypes = () => {
    return async (dispatch) => {
        const response = await axios.get(`${BACKEND_URL}/types`);
        const types = response.data;
        dispatch({ type: GET_ALL_TYPES, payload: types });
    };
};

export const createPokemon = (newPokemon) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${BACKEND_URL}/pokemons`,
                newPokemon
            );
            dispatch({
                type: CREATE_POKEMON,
                payload: response.data,
            });
        } catch (error) {
            dispatch({ type: SET_GLOBAL_ERROR, payload: error.message });
        }
    };
};
