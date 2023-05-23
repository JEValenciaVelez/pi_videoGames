import { Link } from "react-router-dom";
import Game from "./game/Game";



const Games = () => {

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
            <Game />
            </Link>
        </div>
    )
};

export default Games;
