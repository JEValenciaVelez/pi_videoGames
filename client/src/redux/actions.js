import { GET_GAMES_API } from "./actions.type";
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