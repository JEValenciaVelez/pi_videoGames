import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'



const DeleteGame = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handlechange = (e) => {
        if(e.target.name === 'delete'){
            setName(e.target.value);
        }
        
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(name);
    };

    return(
        <div>
            <h1>escribe el nombre del juego</h1>
            <input 
            type="text" 
            name="delete"
            onChange={handlechange}
            />
            <button 
            type="submit"
            onClick={handleSubmit}
            >Eliminar</button>
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
        </div>
    )
};

export default DeleteGame;