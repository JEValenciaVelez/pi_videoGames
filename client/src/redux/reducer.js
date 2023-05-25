import { CREATE_GAME, DELETE_GAME, GET_GAMES_API, GET_GAMES_DATABASE, GET_GAME_DETAIL, GET_GAME_NAME } from "./actions.type";


const initialState = {
    games: [],
    gameDetail: {},
    platforms: [],
    genres : [],
    posts: [],
    
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
            
        case CREATE_GAME:
            return {
                ...state,
                posts: [...state.posts, ...payload]
            }

        case GET_GAMES_DATABASE:
            return {
                ...state,
                games: payload
            }  
            
        case DELETE_GAME:
            return {
                ...state,
                games: state.games.filter(ga=> ga.name !== payload)
            }    

        default:
            return state;  
    }
}

