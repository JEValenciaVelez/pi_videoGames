import { GET_GAMES_API, GET_GAME_DETAIL } from "./actions.type";
import axios from 'axios';


export function getGames(){

    return async (dispatch) => {
        try{
            const response = await axios.get('http://localhost:3001/videogames');
            const data = response.data;
            dispatch({type: GET_GAMES_API, payload: data});
        }catch(error){
            console.log(error);
        }
    }
}


export function getGameDetail(id){

    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:3001/videogames/${id}`);
            const data = response.data;
            dispatch({type:GET_GAME_DETAIL, payload: data})
        }catch(error){
            console.log(error);
        }
    }
}