import {Link} from 'react-router-dom';


const Inicio = () => {

    return (
        <div>
            <h1>App VideoJuegos</h1>
            <img 
            src="https://w0.peakpx.com/wallpaper/592/429/HD-wallpaper-god-of-war-izaan.jpg" 
            alt="imagen" 
            />
            <Link to={`/home`}>
            <button>Ingresar</button>
            </Link>
        </div>
    )
};


export default Inicio;