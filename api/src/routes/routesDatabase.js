
const {Router} = require("express");
const getGamesDb = require("../controllers/getGamesDb");
const createGame = require("../controllers/createGame");

const router = Router();



router.get('/', async (req, res)=>{

    try{
      const games = await getGamesDb()
      res.status(200).json(games);
    }catch(error){
      res.status(404).json({error: error.message});
    }
  
  });


  router.post('/', async(req, res)=>{

      try{
          res.status(200).json(await createGame(req.body));
      }catch(error){
          res.status(404).json({error: error.message});
      }
    
    });  


  module.exports = router