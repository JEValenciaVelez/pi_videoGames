import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getGameDetail } from "../../redux/actions";

import './GameDetail.css';

const GameDetail = () => {

    const {id} = useParams();
    const game = useSelector(state => state.gameDetail)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGameDetail(id));
    },[dispatch, id]);

    return(
        <div className="detail">
            <h1>{game.name}</h1>
            <img src={game.image} alt="logo" />
            <h2>Description</h2>
            <p>{game.description}</p>
            <h2>Popularidad</h2>
            <p>{game.rating}</p>
            <h2>Creacion</h2>
            <p>{game.released}</p>
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
        </div>
    )
} ;


export default GameDetail;