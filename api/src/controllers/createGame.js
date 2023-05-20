

const { Videogame } = require("../db")


const createGame = async(game) => {

    // return game;
    if(!game.name||!game.description||!game.platforms||!game.image||!game.released||!game.rating){
        throw new Error('Faltan campos');
    }

    const videogameEncontrado = await Videogame.findOne({
        where: {name : game.name}
    });

    if(videogameEncontrado){
        throw new Error('Videogame existe en base de datos');
    };

    await Videogame.sync();

    const newGame = await Videogame.create({
        name: game.name,
        description: game.description,
        platforms: game.platforms,
        image: game.image,
        released: game.released,
        rating: game.rating
    });

    return 'Videogame Creado!';
};

module.exports = createGame;

