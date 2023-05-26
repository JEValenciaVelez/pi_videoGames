import { Link } from "react-router-dom";
import './create.css';
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { postGame } from "../../redux/actions";


const CreateGame = () => {

    const dispatch = useDispatch();
    

    let [game, setGame] = useState({
        name: '',
        description: '',
        rating: 0,
        platforms: [],
        released: '',
        image: '',
        genre: ''
    });

    let [errors, setErrors] = useState({
        name: '',
        description: '',
        rating: 0,
        platforms: [],
        released: '',
        image: '',
        genre: ''
    });

    const validate = (game) => {
        const errors = {};
        if(!game.name) errors.name = 'Falta nombre del juego';
        if(!game.description) errors.description = 'Falta descripcion del juego';
        if(!game.rating) errors.rating = 'falta el rating del juego';
        if(game.platforms.length === 0) errors.platforms = 'falta plataformas de juego';
        if(!game.released) errors.released = 'falta fecha de creacion';
        if(!game.image) errors.image = 'falta url de imagen';

        return errors;

    };


    const handleChange = (e)=> {
        console.log('nombre del input->', e.target.name)
        console.log('tipo de dato propiedad platforms antes de setearse-> ', typeof game.platforms)
        if(e.target.name === 'platforms'){ 
            const array = e.target.value.split(' ');
            setGame({
                ...game,
                [e.target.name] : [...array]
            });
            
        }else{
            setGame({
            ...game,
            [e.target.name]: e.target.value
        });
        }
        

        setErrors(validate({
            ...game,
            [e.target.name] : e.target.value
        }))
    };
    console.log('en el handlechange->',  game.platforms)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('game en el submit', game)
        console.log('typo de dato platforms-> ',typeof game.platforms)
        
        if(Object.keys(errors).length===0){
            dispatch(postGame(game));
            return game;
        }
        return alert('Llena todos los campos !');
    };


    return (
        <form 
        className="full"
        onSubmit={handleSubmit}
        >
            <h1 className="title-post">Nuevo juego</h1>
            <div className="main">
            <span>*Este campo es obligatorio</span>
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={handleChange} 
            />
            {errors.name && <p>{errors.name}</p>}
            <span>*Este campo es oblogatorio</span>
            <textarea 
            onChange={handleChange} 
            name="description" 
            id="" cols="30" rows="10" 
            placeholder="description" 
            className="textarea">
            </textarea>
            {errors.description && <p>{errors.description}</p>}
            <span>*Este campo es obligatorio</span>
            <input 
            type="text" 
            name='rating' 
            placeholder='rating' 
            onChange={handleChange} 
            />
            {errors.rating && <p>{errors.rating}</p>}
             <span>*Este campo es obligatorio</span>
             <input 
             type="text" 
             name="platforms" 
             placeholder="platforms"
             onChange={handleChange}
             />
             {errors.platforms && <p>{errors.platforms}</p>}
             <span>*Este campo es obligatorio</span>
            <input 
            type="text" 
            name="genre" 
            placeholder="genre" 
            onChange={handleChange} 
            />
              <span>*Este campo es obligatorio</span>
             <input 
             type="text" 
             name="released" 
             placeholder="released"
             onChange={handleChange}
             />
             {errors.released && <p>{errors.released}</p>}
              <label>
                    Url imagen:
                    <input 
                    type="text" 
                    name="image" 
                    onChange={handleChange} 
                    placeholder="url-image"
                    />
                </label>
                {errors.image && <p>{errors.image}</p>}
            </div>

             <button >Crear</button>
            
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
            
        </form>
    )
};

export default CreateGame;