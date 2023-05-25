import './Inicio.css';
import {Link} from 'react-router-dom';


const Inicio = () => {

    return (
        <div className='inicio'>
            <h1 className='titulo-inicio'>App VideoJuegos</h1>
            <img 
            className='imagen-inicio'
            src="https://w0.peakpx.com/wallpaper/592/429/HD-wallpaper-god-of-war-izaan.jpg" 
            alt="imagen" 
            />
            <div></div>
            <Link to={`/home`}>
            <button className='ingresar'>Ingresar</button>
            </Link>
        </div>
    )
};


export default Inicio;