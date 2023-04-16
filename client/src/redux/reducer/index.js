// ======================== Action Types
import {
    SET_GLOBAL_ERROR,
    REMOVE_GLOBAL_ERROR,
    GET_ALL_POKEMONS,
    GET_POKEMONS_BY_NAME,
    RESET_POKEMONS,
    GET_POKEMON_DETAIL,
    REMOVE_POKEMON_DETAIL,
    GET_ALL_TYPES,
    CREATE_POKEMON,
} from "../actions";

// ======================== Initial State

const initialState = {
    pokemons: [], // SETTER, RESETER OK
    pokemonDetail: {}, // SETTER, REMOVER OK
    types: [], // SETTER OK
    globalError: "", // SETTER, REMOVER OK
};

// ======================== Root Reducer

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GLOBAL_ERROR:
            return { ...state, globalError: action.payload };
        case REMOVE_GLOBAL_ERROR:
            return { ...state, globalError: "" };
        case GET_ALL_POKEMONS:
            return { ...state, pokemons: action.payload };
        case GET_POKEMONS_BY_NAME:
            return { ...state, pokemons: action.payload };
        case RESET_POKEMONS:
            return { ...state, pokemons: [] };
        case GET_POKEMON_DETAIL:
            return { ...state, pokemonDetail: action.payload };
        case REMOVE_POKEMON_DETAIL:
            return { ...state, pokemonDetail: {} };
        case GET_ALL_TYPES:
            return { ...state, types: action.payload };
        case CREATE_POKEMON:
            return { ...state };
        default:
            return { ...state };
    }
};

export default rootReducer;
