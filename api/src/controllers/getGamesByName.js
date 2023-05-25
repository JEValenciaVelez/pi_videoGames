const { default: axios } = require("axios");
const {URL, API_KEY} = process.env



const getGameByName = async (name) =>{
    try{
        const response = await axios.get(`${URL}?key=${API_KEY}`);
        const data = response.data;
        const results = data.results
        const nameFiltrado = results.filter(el=>el.name.toLowerCase().split(' ').includes(name.toLowerCase()));
        if(nameFiltrado.length===0){
            return `No se encontraron coincidencias`
        }
        const gameMapeado = nameFiltrado.map(ga=>{
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
        throw new Error(error.message);
    }
};


module.exports = getGameByName;