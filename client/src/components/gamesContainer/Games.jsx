import { Link } from "react-router-dom";
import Game from "./game/Game";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";
import { useEffect } from "react";




const Games = () => {

    const dispatch = useDispatch();
    const listGames = useSelector(state => state.games);

    useEffect(() => {
        dispatch(getGames());
      }, [dispatch]);


    return(
        <div>
            <Link to={`/create`}>
            <button name="post">NewGame</button>
            </Link>
            <span >Buscar</span>
            <input 
            type="text" 
            name="search"
            />
            <Link to={`/delete`}>
            <button name="delete">Delete</button>
            </Link>
            <Link to={`/game/:id`}>
            <Game games={listGames}/>
            </Link>
        </div>
    )
};

export default Games;
