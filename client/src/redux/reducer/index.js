// ======================== Action Types
import {
    GLOBAL_ERROR_SET,
    GLOBAL_ERROR_REMOVE,
    ALL_POKEMONS_GET,
    POKEMONS_SET,
    POKEMONS_FILTER_BY_TYPE,
    POKEMONS_FILTER_BY_SOURCE,
    POKEMONS_ORDER,
    POKEMONS_REMOVE,
    POKEMONS_BY_NAME_GET,
    POKEMON_DETAIL_GET,
    POKEMON_DETAIL_REMOVE,
    TYPES_GET,
    CREATE_POKEMON,
} from "../actions";

// ======================== Initial State

const initialState = {
    globalError: "",
    allPokemons: [],
    pokemons: [],
    pokemonDetail: {},
    types: [],
};

// ======================== Root Reducer

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Global Error - SETTER, REMOVER
        case GLOBAL_ERROR_SET:
            return { ...state, globalError: action.payload };
        case GLOBAL_ERROR_REMOVE:
            return { ...state, globalError: "" };

        // All pokemons - SETTER
        case ALL_POKEMONS_GET:
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload,
            };

        // Pokemons - SETTER, FILTER (2), ORDER, REMOVER, SETTER BY NAME
        case POKEMONS_SET:
            return {
                ...state,
                pokemons: state.allPokemons,
            };
        case POKEMONS_FILTER_BY_TYPE:
            return {
                ...state,
                pokemons: state.pokemons.filter((p) =>
                    p.types.includes(action.payload)
                ),
            };
        case POKEMONS_FILTER_BY_SOURCE:
            if (action.payload === "dataBase") {
                return {
                    ...state,
                    pokemons: state.pokemons.filter(
                        (p) => isNaN(p.id) === true
                    ),
                };
            }
            if (action.payload === "pokeApi") {
                return {
                    ...state,
                    pokemons: state.pokemons.filter(
                        (p) => isNaN(p.id) === false
                    ),
                };
            }
            break;
        case POKEMONS_ORDER:
            let orderedPokemons = [...state.pokemons];

            switch (action.payload) {
                case "alphabeticalAsc":
                    orderedPokemons.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    break;
                case "alphabeticalDesc":
                    orderedPokemons.sort((a, b) =>
                        b.name.localeCompare(a.name)
                    );
                    break;
                case "attackAsc":
                    orderedPokemons.sort((a, b) => a.attack - b.attack);
                    break;
                case "attackDesc":
                    orderedPokemons.sort((a, b) => b.attack - a.attack);
                    break;
                default:
                    break;
            }
            return { ...state, pokemons: orderedPokemons };
        case POKEMONS_REMOVE:
            return { ...state, pokemons: [] };
        case POKEMONS_BY_NAME_GET:
            return { ...state, pokemons: action.payload };

        // Pokemon Detail - SETTER, REMOVER
        case POKEMON_DETAIL_GET:
            return { ...state, pokemonDetail: action.payload };
        case POKEMON_DETAIL_REMOVE:
            return { ...state, pokemonDetail: {} };

        // Types - SETTER
        case TYPES_GET:
            return { ...state, types: action.payload };

        // Create Pokemon
        case CREATE_POKEMON:
            return { ...state };

        default:
            return { ...state };
    }
};

export default rootReducer;
