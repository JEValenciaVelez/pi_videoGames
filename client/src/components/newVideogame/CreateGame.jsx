import { Link } from "react-router-dom";


const CreateGame = () => {

    return (
        <form className="potgame">
            <h2>Aqui formulario de creacion de juego</h2>
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
            
        </form>
    )
};

export default CreateGame;