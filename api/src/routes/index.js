const { Router } = require('express');
const { getGames } = require('../controllers/getGames');
const getGamesDb = require('../controllers/getGamesDb');
const createGame = require('../controllers/createGame');
const getGameById = require('../controllers/getGamesById');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async (req, res)=>{

  try{
    res.status(200).json(await getGames());
  }catch(error){
    res.status(404).json({error: error});
  }

});


router.get('/videogames/:idVideogame', async (req, res)=>{

  const {idVideogame} = req.params;


  try{
    res.status(200).json(await getGameById(idVideogame));
  }catch(error){
    res.status(404).json({error: error});
  }

});




router.get('/database', async (req, res)=>{

    try{
      res.status(200).json(await getGamesDb());
    }catch(error){
      res.status(404).json({error: error});
    }
  
  });

router.post('/postgame', async(req, res)=>{

    try{
        res.status(200).json(await createGame(req.bo));
      }catch(error){
        res.status(404).json({error: error});
      }

});  


module.exports = router;
