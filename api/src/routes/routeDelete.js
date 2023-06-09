

const {Router} = require('express');
const deleteGame = require('../controllers/deleteGame');

const router = Router();




router.delete('/', async (req, res)=>{
  try{
    res.status(200).json(await deleteGame(req.body.name));
}catch(error){
    res.status(404).json({error: error.message});
}
});


module.exports = router;