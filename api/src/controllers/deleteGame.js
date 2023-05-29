
const { Videogame } = require("../db")


const deleteGame = async (name) => {

    try {
        const nameToLower = name.toLowerCase().trim();
        const game = await Videogame.findOne({
            where: {name: nameToLower}
        });
        if (!game) {
          throw new Error('No se encontro ningun juego con ese nombre');
        }
        await game.destroy();
        return `Se ha eliminado el juego -> ${name}`;
      } catch (error) {
        throw new Error(error.message);
      }
};


module.exports = deleteGame