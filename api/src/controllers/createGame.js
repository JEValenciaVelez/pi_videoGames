const Videogame = require("../models/Videogame");


const createGame = async({name,description,platforms,image,released,rating}) => {

    if(!name||!description||!platforms||!image||!released||!rating) throw new Error('Faltan campos');

    const findGame = await Videogame.findOne({
        where: {name: name}
    });

    if(findGame){
        throw new Error('El juego ya existe en base de datos');
    }

    await Videogame.sync();

    const newGame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        released,
        rating
    });

    return newGame;
};

module.exports = createGame;

