import {} from "../actions";

const initialState = {
    pokemons: [],
    pokemonDetail: {},
    types: [],
    globalError: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default rootReducer;
