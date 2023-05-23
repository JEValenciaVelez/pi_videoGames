import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Home from './components/home/Home';
import CreateGame from './components/newVideogame/CreateGame';
import DeleteGame from './components/deleteVideogame/DeleteGame';
import GameDetail from './components/GameDetail/GameDetail';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/home' element={<Home />} />
      <Route path='/create' element={<CreateGame />} />
      <Route path='/delete' element={<DeleteGame />} />
      <Route path='/game/:id'  element={<GameDetail/>} />
    </Routes>
  );
}

export default App;
