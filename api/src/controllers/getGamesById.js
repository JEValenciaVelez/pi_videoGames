const { default: axios } = require("axios");
const {URL, API_KEY} = process.env



const getGameById = async (id) => {
    try{
        const response = await axios.get(`${URL}/${id}?key=${API_KEY}`);
        const data = response.data;
        console.log(data);
       
            const game = {
                id: data.id,
                name: data.name,
                description: data.description.replace(/<\/?[^>]+(>|$)/g, ""),
                image: data.background_image,
                rating: data.rating,
                platforms: data.platforms.map(p=>p.name),
                released: data.released
            }
        
        console.log(game);

        return game;
    }catch(error){
        throw new Error(`error : ${error}`);
    }
};


module.exports= getGameById;