
const axios = require('axios')
const { URL, API_KEY } = process.env;



const getGames = async () => {
    try {
        //como son 5 urls y cada una me trae 20 juegos y necesito 100 resuelvo lo siguiente...
      const games = [];
      const totalPages = 5;
      const requests = [];
  
      for (let page = 1; page <= totalPages; page++) {
        requests.push(axios.get(`${URL}?key=${API_KEY}&page=${page}`, { timeout: 5000 }));
      }
  
      const responses = await Promise.all(requests);
  
      for (const response of responses) {
        const data = response.data.results;
        games.push(
          ...data.map((game) => ({
            id: game.id,
            name: game.name,
            released: game.released,
            rating: game.rating,
            platforms: game.platforms.map((pl) => pl.platform.name),
            image: game.background_image,
            genres: game.genres.map((gen) => gen.slug),
          }))
        );
      }
  
      console.log('myList ->', games.length);
      return games;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  

module.exports = {getGames};