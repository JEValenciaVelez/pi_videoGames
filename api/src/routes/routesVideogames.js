const { Router } = require('express');
const { getGames } = require('../controllers/getGames');
const getGameById = require('../controllers/getGamesById');
const getGameByName = require('../controllers/getGamesByName');



const router = Router();

router.get('/', async (req, res) => {
    console.log(`Se ha accedido a la ruta /videogames, req.query: ${req.query}`);
    const { search } = req.query;
    
    try {
      if (search) {
        const game = await getGameByName(search);
        res.status(200).json(game);
      } else {
        const games = await getGames();
        res.status(200).json(games);
      }
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });


  router.get('/:idVideogame', async (req, res)=>{
    const {idVideogame} = req.params;
    try{
      res.status(200).json(await getGameById(idVideogame));
    }catch(error){
      res.status(404).json({error: error.message});
    }
  
  });


  module.exports = router;