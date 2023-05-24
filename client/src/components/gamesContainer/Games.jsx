import { Link } from "react-router-dom";
import Game from "./game/Game";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";
import { useEffect, useState } from "react";
import Pagination from "./pagination/pagination";




const Games = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

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
            <Game games={listGames.slice(indexOfFirstItem, indexOfLastItem)}/>
            <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={listGames.length > 0 ? listGames.length : null}
            paginate={paginate}
            currentPage={currentPage}
            />
        </div>
    )
};

export default Games;
