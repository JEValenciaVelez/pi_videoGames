const { default: axios } = require("axios");
const {URL, API_KEY} = process.env



const getGameByName = async (name) =>{
    try{
        const response = await axios.get(`${URL}?name=${name}?key=${API_KEY}`);
        const data = response.data;
        const nameFiltrado = data.filter(el=>el.name.toLowerCase() === name.toLowerCase());
        return nameFiltrado;
        
    }catch(error){
        console.log(error)
    }
};


module.exports = getGameByName;