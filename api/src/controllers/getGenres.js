const { default: axios } = require("axios");
const { API_KEY} = process.env;



const getGenres = async () => {
    try{
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const data = response.data.results;
        const genres = data.map(gen=>gen.name);
        return genres;
    }catch(error){
        return error
    }
};


module.exports=getGenres;