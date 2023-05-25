const { default: axios } = require("axios");
const {Videogame} = require('../db')
const {URL, API_KEY} = process.env



const getGameById = async (id) => {
    try{
        const response = await axios.get(`${URL}/${id}?key=${API_KEY}`);
        const data = response.data;
        //console.log(data);
       
            const game = {
                id: data.id,
                name: data.name,
                description: data.description.replace(/<\/?[^>]+(>|$)/g, ""),
                image: data.background_image,
                rating: data.rating,
                platforms: data.platforms.map(p=>p.name),
                released: data.released
            }
        
        //console.log(game);

        return game;
    }catch(error){
        console.log(error);

        await Videogame.sync();

        const videoGameFromDb = await Videogame.findByPk(id);
    
        if (videoGameFromDb) {
    
          return videoGameFromDb.toJSON();
    
        } else {
    
          throw new Error("No se encontró la receta en la base de datos.");
    
        }
    }
};


module.exports= getGameById;