import { GET_GAMES_API } from "./actions.type";


const initialState = {
    games: [],
    gameDetail: {},
    platforms: []
};

export function rootReducer(state= initialState , {type, payload}){
    switch(type){
        case GET_GAMES_API:
            return {
                ...state,
                games: payload
            }

        default:
            return state;  
    }
}

