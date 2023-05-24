import { GET_GAMES_API, GET_GAME_DETAIL } from "./actions.type";


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

        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: payload
            }    

        default:
            return state;  
    }
}

