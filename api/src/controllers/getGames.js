
const axios = require('axios')
const { URL, API_KEY } = process.env;



const getGames = async() => {

    try{
        const response = await axios.get(`${URL}?key=${API_KEY}`);
        const data = response.data;
        //console.log(data.results)
        const games = data.results.map(game=>{
            return {
                id: game.id,
                name: game.name,
                released: game.released,
                rating: game.rating,
                platforms: game.platforms.map(pl=>pl.platform.name),
                // image : game.platforms.map(pl=>pl.platform.image_background),
                image: game.background_image,
                genre : game.genres.map(gen=>gen.slug)
            }
        });
        return games;
        //return data.results;
    }catch(error){
        console.log(error);
        return error;
    }

};

module.exports = {getGames};