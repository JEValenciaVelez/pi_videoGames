import { Link } from 'react-router-dom';
import './game.css'

const Game = ({ games }) => {
  // Verificar si "games" es una cadena y convertirla en un arreglo vacío si es así
  const gamesArray = typeof games === 'string' ? [] : games;

  return (
    <div className="container">
      {gamesArray.length > 0 ? (
        gamesArray.map(g => (
          <div className="card" key={g.id}>
            <h1>{g.name}</h1>
            <Link to={`/game/${g.id}`}>
              <img src={g.image} alt="imagenGame" />
            </Link>
            <h4>{g.genres}</h4>
            <h2>{g.platforms.join(', ')}</h2>
          </div>
        ))
      ) : (
        <h1>No hay respuesta </h1>
      )}
    </div>
  );
};

export default Game;
