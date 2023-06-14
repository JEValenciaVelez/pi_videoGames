
const {Videogame} = require("../db");



const getGamesDb = async() => {

    try {
        await Videogame.sync();
        const games = await Videogame.findAll();
        if (games.length === 0) {
          throw new Error('No hay juegos en la base de datos');
        }
        return games;
      } catch (error) {
        throw new Error(error.message);
      }
};


module.exports = getGamesDb;