
import {Link} from 'react-router-dom';

const Nav = () => {

    return(
        <nav>
            <Link to={'/'}>
            <button>Inicio</button>
            <button name='A-Z'>A-Z</button>
            <button name='Z-A'>Z-A</button>
            <button name='des'>Popular</button>
            <button name='asc'>Menos Popular</button>
            <button name='api'>Api</button>
            <button name='database'>Database</button>
            </Link>

        </nav>
    )
};


export default Nav;