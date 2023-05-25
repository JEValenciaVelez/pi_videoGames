import { GET_GAMES_API, GET_GAME_DETAIL, GET_GAME_NAME } from "./actions.type";
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


export function getGameByName(name){
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:3001/videogames?search=${name}`);
            const data = response.data;
            console.log(`data en la action: ${Object.values(data)}`)
            dispatch({type: GET_GAME_NAME, payload: data})
        }catch(error){
            console.log(error)
        }
    }
}