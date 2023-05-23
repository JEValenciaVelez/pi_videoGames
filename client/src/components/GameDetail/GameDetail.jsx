import { Link } from "react-router-dom";



const GameDetail = () => {

    return(
        <div>
            <h2>Detalle del juego recibido por params</h2>
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
        </div>
    )
} ;


export default GameDetail;