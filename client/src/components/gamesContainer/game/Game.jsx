import { Link } from 'react-router-dom';
import './game.css'


const Game = ({games}) => {


    return(
        <div className="container">
           {games.map(g=>(
            <div className="card" key={g.id}>
              <h1>{g.name}</h1>
              <Link to={`/game/${g.id}`}>
              <img src={g.image} alt="imagenGame" />
              </Link>
              <h2>{g.genre}</h2>
            </div>
           ))}
        </div>
    )
};


export default Game;