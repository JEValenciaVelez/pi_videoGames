
const {Router} = require('express');
const getGenres = require('../controllers/getGenres');

const router = Router();


router.get('/', async (req, res)=>{

    try{
      res.status(200).json(await getGenres());
    }catch(error){
      res.status(404).json({error: error.message});
    }
  
  });

  module.exports = router;