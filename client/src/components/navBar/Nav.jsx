
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { database, getGames,  getGenresAction, getOrder } from '../../redux/actions';
import './nav.css';




const Nav = () => {

    const dispatch = useDispatch();
    

    const handleGenres = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(getGenresAction(e.target.value));
    }

    const handleClick = (e) => {
        switch(e.target.value){
            case 'database':
                e.preventDefault();
                console.log(e.target.value);
                dispatch(database());
            
            break;

            case 'api' : 
                e.preventDefault();
                console.log(e.target.value);
                dispatch(getGames());
            
            break;

            case 'A-Z':
                e.preventDefault();
                console.log(e.target.value);
                dispatch(getOrder(e.target.value));

            break;

            case 'Z-A':
                e.preventDefault();
                console.log(e.target.value);
                dispatch(getOrder(e.target.value));

            break;

            case 'des':
                e.preventDefault();
                console.log(e.target.value);
                dispatch(getOrder(e.target.value));

            break;

            case 'asc':
                e.preventDefault();
                console.log(e.target.value);
                dispatch(getOrder(e.target.value));

            break;
            

            default:
                break;
        }
    };

    return(
        <nav className='nav-bar'>

            <Link to={'/'}>
            <button>Inicio</button>
            </Link>
            
            <select onChange={handleClick}>
                <option value="">Ordenar</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="des">Descendente</option>
                <option value="asc">Ascendente</option>
            </select>

            <select onChange={handleClick}>
                <option value="">Origen</option>
                <option value="api">Api</option>
                <option value="database">Database</option>  
            </select>

            <select onChange={handleGenres}>
                <option value="">Filtrar por generos</option>
                <option value="action">action</option>
                <option value="indie">indie</option>
                <option value="adventure">adventure</option>
                <option value="role-playing-games-rpg">role-playing-games-rpg</option>
                <option value="strategy">strategy</option>
                <option value="shooter">shooter</option>
                <option value="casual">casual</option>
                <option value="simulation">simulation</option>
                <option value="puzzle">puzzle</option>
                <option value="arcade">arcade</option>
                <option value="platformer">platformer</option>
                <option value="massively-multiplayer">massively-multiplayer</option>
                <option value="racing">racing</option>
                <option value="sports">sports</option>
                <option value="fighting">fighting</option>
                <option value="family">family</option>
                <option value="board-games">board-games</option>
                <option value="educational">educational</option>
                <option value="card">card</option>
            </select>

        </nav>
    )
};


export default Nav;