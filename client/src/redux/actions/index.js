import axios from "axios";

// ======================== Env
const BACKEND_URL = "http://192.168.0.157:3001";

// ======================== Action Types

// Global Error - SETTER, REMOVER
export const GLOBAL_ERROR_SET = "GLOBAL_ERROR_SET";
export const GLOBAL_ERROR_REMOVE = "GLOBAL_ERROR_REMOVE";

// All Pokemons - SETTER
export const ALL_POKEMONS_GET = "GET_ALL_POKEMONS";

// Pokemons - SETTER, FILTER (2), ORDER, REMOVER, SETTER BY NAME
export const POKEMONS_SET = "POKEMONS_SET";
export const POKEMONS_FILTER_BY_TYPE = "POKEMONS_FILTER_BY_TYPE";
export const POKEMONS_FILTER_BY_SOURCE = "POKEMONS_FILTER_BY_SOURCE";
export const POKEMONS_ORDER = "POKEMONS_ORDER";
export const POKEMONS_REMOVE = "POKEMONS_REMOVE";
export const POKEMONS_BY_NAME_GET = "POKEMONS_GET_BY_NAME";

// Pokemon Detail - SETTER, REMOVER
export const POKEMON_DETAIL_GET = "POKEMON_DETAIL_GET";
export const POKEMON_DETAIL_REMOVE = "POKEMON_DETAIL_REMOVE";

// Types - SETTER
export const TYPES_GET = "TYPES_GET";

// Create Pokemon
export const CREATE_POKEMON = "CREATE_POKEMON";

// ======================== Action Creators
export const setGlobalError = (error) => {
    return {
        type: GLOBAL_ERROR_SET,
        payload: error,
    };
};

export const removeGlobalError = () => {
    return {
        type: GLOBAL_ERROR_REMOVE,
    };
};

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/pokemons`);
            const pokemons = response.data;
            dispatch({ type: ALL_POKEMONS_GET, payload: pokemons });
        } catch (error) {
            dispatch({ type: GLOBAL_ERROR_SET, payload: error.message });
        }
    };
};

export const getPokemonsByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${BACKEND_URL}/pokemons?name=${name}`
            );
            const pokemons = response.data;
            dispatch({ type: POKEMONS_BY_NAME_GET, payload: pokemons });
        } catch (error) {
            dispatch({
                type: GLOBAL_ERROR_SET,
                payload: `Pokemon "${name}" does not exist.`,
            });
        }
    };
};

export const filterPokemonsByType = (type) => {
    return {
        type: POKEMONS_FILTER_BY_TYPE,
        payload: type,
    };
};

export const filterPokemonsBySource = (source) => {
    return {
        type: POKEMONS_FILTER_BY_SOURCE,
        payload: source,
    };
};

export const orderPokemons = (order) => {
    return {
        type: POKEMONS_ORDER,
        payload: order,
    };
};

export const removePokemons = () => {
    return {
        type: POKEMONS_REMOVE,
    };
};

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/pokemons/${id}`);
            const pokemon = response.data;
            dispatch({ type: POKEMON_DETAIL_GET, payload: pokemon });
        } catch (error) {
            dispatch({ type: GLOBAL_ERROR_SET, payload: error.message });
        }
    };
};

export const removePokemonDetail = () => {
    return {
        type: POKEMON_DETAIL_REMOVE,
    };
};

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/types`);
            const types = response.data;
            dispatch({ type: TYPES_GET, payload: types });
        } catch (error) {
            dispatch({ type: GLOBAL_ERROR_SET, payload: error.message });
        }
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
            dispatch({ type: GLOBAL_ERROR_SET, payload: error.message });
        }
    };
};
