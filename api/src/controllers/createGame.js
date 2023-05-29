

const { Videogame, Genre } = require("../db")


const createGame = async(game) => {

    // return game;
    if(!game.name||!game.description||!game.platforms||!game.image||!game.released||!game.rating||!game.genre){
        throw new Error('Faltan campos');
    }

    const nameToLower = game.name.toLowerCase().trim();

    const videogameEncontrado = await Videogame.findOne({
        where: {name : nameToLower}
    });

    if(videogameEncontrado){
        throw new Error('Videogame existe en base de datos');
    };

    await Videogame.sync();

    const newGame = await Videogame.create({
        name: nameToLower,
        description: game.description,
        platforms: game.platforms,
        image: game.image,
        released: game.released,
        rating: game.rating,
        genre: game.genre
    });

    await Genre.sync();
    
    const findGenre = await Genre.findOne({
        where:{name: game.genre}
    });

    if(findGenre){
        await newGame.addGenre(findGenre);
    }

    return newGame;
};

module.exports = createGame;

