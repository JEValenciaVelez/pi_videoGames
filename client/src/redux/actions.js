import { CREATE_GAME, DELETE_GAME, GET_GAMES_API, GET_GAMES_DATABASE, GET_GAME_DETAIL, GET_GAME_NAME, ORDER_GAMES } from "./actions.type";
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


export function postGame(game){
    return async (dispatch) => {
        try{
            const response = await axios.post(`http://localhost:3001/database`, game, {maxContentLength: Infinity});
            const data = response.data;
            dispatch({type: CREATE_GAME, payload: data})
            alert(`video juego -> ${game.name} creado!`)
        }catch(error){
            console.log('game en la action', game);
            console.log(`error en la action: `, error);
            
        }
    }
}


export function database(){
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:3001/database`);
            const data = response.data;
            dispatch({type: GET_GAMES_DATABASE, payload: data});
        }catch(error){
            console.log(error)
        }
    }
}

export function deleteGame(name){
    return async (dispatch) => {
        try{
            console.log('name en la action: ',name)
            const response = await axios.delete(`http://localhost:3001/delete`, { data: { name } });
            const data = response.data;
            dispatch({type: DELETE_GAME, payload:data});
            alert('Game Eliminado');
        }catch(error){
            console.log('error en la action', error)
        }
    }
}


export function getOrder(order){
    return (dispatch) => {
        dispatch({type:ORDER_GAMES, payload: order});
        console.log('valor de order: ', order)
    }
}