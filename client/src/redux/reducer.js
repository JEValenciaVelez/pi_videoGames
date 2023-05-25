import { GET_GAMES_API, GET_GAME_DETAIL, GET_GAME_NAME } from "./actions.type";


const initialState = {
    games: [],
    gameDetail: {},
    platforms: [],
    genres : [],
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
            
        case GET_GAME_NAME:
            return{
                ...state,
                games: payload
            }    

        default:
            return state;  
    }
}

