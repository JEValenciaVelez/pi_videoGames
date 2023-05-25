import { Link } from 'react-router-dom';
import './game.css'


const Game = ({ games }) => {

  return (
    <div className="container">
      {games && games.length > 0 ? (
        games.map(g => (
          <div className="card" key={g.id}>
            <h1>{g.name}</h1>
            <Link to={`/game/${g.id}`}>
              <img src={g.image} alt="imagenGame" />
            </Link>
            <h2>{g.genres}</h2>
          </div>
        ))
      ) : (
        <h1>No hay respuesta de la api</h1>
      )}
    </div>
  );
};


export default Game;