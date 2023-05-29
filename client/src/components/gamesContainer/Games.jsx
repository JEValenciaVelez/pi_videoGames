import { Link } from "react-router-dom";
import Game from "./game/Game";
import { useDispatch, useSelector } from "react-redux";
import {  getGameByName, getGames } from "../../redux/actions";
import { useEffect, useState } from "react";
import Pagination from "./pagination/pagination";
import './Games.css'



const Games = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [name, setName] = useState('');
    

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

    
    const handleChange = (e)=>{
        if (e.target.name === 'itemsPerPage') {
            setItemsPerPage(parseInt(e.target.value));
            setCurrentPage(1); 
        }
        if(e.target.name === 'search'){
          setName(e.target.value);
          console.log(name)
        }
    };


    const handleSearch = () => {
         dispatch(getGameByName(name));
    };

    

    

    return(
        <div className="container-games">
          {console.log(listGames)}
          <div className="conatiner-buttons">
          <Link to={`/create`}>
            <button name="post">NewGame</button>
            </Link>
            <button onClick={handleSearch}>Buscar</button>
            <input 
            type="text" 
            name="search"
            onChange={handleChange}
            />
            <Link to={`/delete`}>
            <button name="delete">Delete</button>
            </Link>
          </div>
            <div className="items-per-page">
            <label htmlFor="itemsPerPage">Cantidad de ítems por página:</label>
            <select onChange={handleChange} name="itemsPerPage">
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
          </div>
            <Game games={listGames.length > 0 ? listGames.slice(indexOfFirstItem, indexOfLastItem): []} />
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
