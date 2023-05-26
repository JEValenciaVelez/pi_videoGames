
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { database, getGames, getOrder } from '../../redux/actions';
import './nav.css';


const Nav = () => {

    const dispatch = useDispatch();

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
            <button onClick={handleClick} name='A-Z' value='A-Z'>A-Z</button>
            <button onClick={handleClick} name='Z-A' value='Z-A'>Z-A</button>
            <button onClick={handleClick} name='des'  value='des'>Popular</button>
            <button onClick={handleClick} name='asc'  value='asc'>Menos Popular</button>
            <button onClick={handleClick} name='api' value='api'>Api</button>
            <button onClick={handleClick} name='database' value='database'>Database</button>
            </Link>

        </nav>
    )
};


export default Nav;