const { Router } = require('express');
const { getGames } = require('../controllers/getGames');
const getGamesDb = require('../controllers/getGamesDb');
const createGame = require('../controllers/createGame');
const getGameById = require('../controllers/getGamesById');
const getGameByName = require('../controllers/getGamesByName');
const getGenres = require('../controllers/getGenres');
const deleteGame = require('../controllers/deleteGame');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//===============================================================================================================/
router.get('/videogames', async (req, res)=>{

  try{
    res.status(200).json(await getGames());
  }catch(error){
    res.status(404).json({error: error.message});
  }

});

//=======================================================================================================

router.get('/videogames/:idVideogame', async (req, res)=>{

  const {idVideogame} = req.params;


  try{
    res.status(200).json(await getGameById(idVideogame));
  }catch(error){
    res.status(404).json({error: error.message});
  }

});

//============================================================================================================

router.get('/videogames/', async (req, res)=>{

  const {name} = req.query;

  try{
    res.status(200).json(await getGameByName(name));
  }catch(error){
    res.status(404).json({error: error.message});
  }

});

//================================================================================================================

router.get('/genres', async (req, res)=>{

  try{
    res.status(200).json(await getGenres());
  }catch(error){
    res.status(404).json({error: error.message});
  }

});


//===============================================================================================================


router.get('/database', async (req, res)=>{

    try{
      res.status(200).json(await getGamesDb());
    }catch(error){
      res.status(404).json({error: error.message});
    }
  
  });

//================================================================================================================


router.post('/database', async(req, res)=>{

  try{
      res.status(200).json(await createGame(req.body));
  }catch(error){
      res.status(404).json({error: error.message});
  }

});  

//================================================================================================================


router.delete('/delete', async (req, res)=>{
  try{
    res.status(200).json(await deleteGame(req.body.name));
}catch(error){
    res.status(404).json({error: error.message});
}
});


module.exports = router;
