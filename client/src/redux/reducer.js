import { CREATE_GAME, DELETE_GAME, GET_GAMES_API, GET_GAMES_DATABASE, GET_GAME_DETAIL, GET_GAME_NAME, GET_GENRES, ORDER_GAMES } from "./actions.type";


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
                posts: [...state.posts, payload]
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
            
        case GET_GENRES:
            return {
                ...state,
                games: [...state.games].filter(ga=>ga.genres.includes(payload))
            }
            
        case ORDER_GAMES:
            switch (payload){
                case 'A-Z':
                    return {
                        ...state,
                        games: [...state.games].sort((a,b)=>a.name.charAt(0).localeCompare(b.name.charAt(0)))
                    }

                case 'Z-A':
                     return {
                         ...state,
                        games: [...state.games].sort((a,b)=>b.name.charAt(0).localeCompare(a.name.charAt(0)))
                    }

                case 'des':
                    return {
                         ...state,
                        games: [...state.games].sort((a,b)=>b.rating - a.rating)
                    }

                case 'asc':
                    return {
                         ...state,
                        games: [...state.games].sort((a,b)=>a.rating - b.rating)
                    }
                
                default:
                    return state;
            }
           

        default:
            return state;  
    }
}

