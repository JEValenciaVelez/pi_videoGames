import './Inicio.css';
import {Link} from 'react-router-dom';


const Inicio = () => {

    return (
        <div className='inicio'>
            <h1 className='titulo-inicio'>App VideoJuegos</h1>
            <div className='animacion-container'>
                 <img 
            className='imagen-inicio'
            src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/04/12/6436dbfe1f6ed.png" 
            alt="imagen" 
            />
            </div>
            <Link to={`/home`}>
            <button className='ingresar'>Ingresar</button>
            </Link>
        </div>
    )
};


export default Inicio;