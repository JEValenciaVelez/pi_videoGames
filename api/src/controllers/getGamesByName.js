const { default: axios } = require("axios");
const e = require("express");
const {URL, API_KEY} = process.env



const getGameByName = async (name) =>{
    try{
        const response = await axios.get(`${URL}?key=${API_KEY}`);
        const data = response.data;
        const results = data.results
        const nameFiltrado = results.filter(el=>el.name.toLowerCase()=== name.toLowerCase());
        if(nameFiltrado.length===0){
            return `No se encontraron coincidencias`
        }
        const game = nameFiltrado[0];
        const responseGame ={
            id: game.id,
            name: game.name,
            released: game.released,
            image: game.background_image,
            rating: game.rating,
            platforms: game.platforms.map(el=>el.platform.slug),
            genres: game.genres.map(el=>el.slug)
        };
        return responseGame;
    }catch(error){
        throw new Error(error.message);
    }
};


module.exports = getGameByName;