const { default: axios } = require("axios");
const {URL, API_KEY} = process.env;
const {Videogame} = require('../db')



const getGameByName = async (name) =>{
    try{
        const response = await axios.get(`${URL}?search=${name}&key=${API_KEY}`);
        const data = response.data;
        const results = data.results
        // const nameFiltrado = results.filter(el=>el.name.toLowerCase().split(' ').includes(name.toLowerCase()));
        if(results.length===0){
            const result = [];
            const VideogameFound = await Videogame.findOne({
                where: {name: name.toLowerCase().trim()}
            });
            console.log('videogame en base de datos->',VideogameFound)
            if(VideogameFound){
                result.push(VideogameFound);
                return result
            } 
            return `No se encontraron coincidencias`
        }
        const gameMapeado = results.map(ga=>{
            return {
                id: ga.id,
                name: ga.name,
                released: ga.released,
                image: ga.background_image,
                rating: ga.rating,
                platforms: ga.platforms.map(pla=>pla.name),
                genres: ga.genres.map(g=>g.name)

            }
        });

        return gameMapeado;
        
    }catch(error){
        throw new Error(`Error en el controller-> ${error.message}`);
    }
};


module.exports = getGameByName;