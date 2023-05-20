const { default: axios } = require("axios");
const { API_KEY} = process.env;
const { Genre } = require('../db');



const getGenres = async () => {
    try{
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const data = response.data.results;
        const genres = data.map(gen=>gen.name);
        //sincronizo el modelo Genre de la database
        await Genre.sync();
        //guardo los generos en la tabla
        for(let i = 0; i<genres.length; i++){
            const el = genres[i];
            await Genre.create({
                name: el
            })
        }

        return genres;
    }catch(error){
        return error
    }
};


module.exports=getGenres;