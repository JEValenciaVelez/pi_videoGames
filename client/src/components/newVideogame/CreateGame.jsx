import { Link } from "react-router-dom";
import './create.css';


const CreateGame = () => {



    const handleChange = (e)=> {};


    return (
        <form className="full">
            <h1 className="title-post">Nuevo juego</h1>
            <div className="main">
            <span>*Este campo es obligatorio</span>
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={handleChange} 
            />
            <span>*Este campo es oblogatorio</span>
            <textarea 
            onChange={handleChange} 
            name="description" 
            id="" cols="30" rows="10" 
            placeholder="description" 
            className="textarea">
            </textarea>
            <span>*Este campo es obligatorio</span>
            <input 
            type="text" 
            name='rating' 
            placeholder='rating' 
            onChange={handleChange} 
            />
             <span>*Este campo es obligatorio</span>
             <input 
             type="text" 
             name="platforms" 
             placeholder="platforms"
             onChange={handleChange}
             />
              <span>*Este campo es obligatorio</span>
             <input 
             type="text" 
             name="released" 
             placeholder="released"
             onChange={handleChange}
             />
              <label>
                    Url imagen:
                    <input 
                    type="text" 
                    name="image" 
                    onChange={handleChange} 
                    placeholder="url-image"
                    />
                </label>
            </div>
            
            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
            
        </form>
    )
};

export default CreateGame;