const { default: axios } = require("axios");
const {URL, API_KEY} = process.env



const getGameByName = async (game) =>{
    try{
        const response = await axios.get(`${URL}?search=${game}?key=${API_KEY}`);
        const data = response.data;
        const filteredData = data.filter(ga=>ga.name === game);
        
        return filteredData;
        
    }catch(error){
        console.log(error)
    }
};


module.exports = getGameByName;