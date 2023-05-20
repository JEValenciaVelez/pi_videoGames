const Videogame = require("../models/Videogame");





const getGamesDb = async() => {

    await Videogame.sync();
    const games = await Videogame.findAll();
    if(!games) throw new Error('No hay juegos en database');
    return games;
};


module.exports = {getGamesDb};