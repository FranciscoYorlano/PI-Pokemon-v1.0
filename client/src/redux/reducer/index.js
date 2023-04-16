// ======================== Action Types
import {
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    REMOVE_POKEMON_DETAIL,
    GET_ALL_TYPES,
    CREATE_POKEMON,
} from "../actions";

const initialState = {
    pokemons: [],
    pokemonDetail: {},
    types: [],
    globalError: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return { ...state, pokemons: action.payload };
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
