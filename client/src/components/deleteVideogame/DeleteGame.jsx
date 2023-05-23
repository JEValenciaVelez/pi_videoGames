import { Link } from "react-router-dom";



const DeleteGame = () => {

    return(
        <div>
            <h1>Aqui un campo de entrada para eliminar juego por nombre</h1>
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
        </div>
    )
};

export default DeleteGame;