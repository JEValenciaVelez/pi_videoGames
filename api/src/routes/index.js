const { Router } = require('express');
const routesVideogames = require('./routesVideogames');
const routesGenres = require('./routesGenres');
const routesDatabase = require('./routesDatabase');
const routeDelete = require('./routeDelete');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', routesVideogames);
router.use('/genres', routesGenres);
router.use('/database', routesDatabase);
router.use('/delete', routeDelete);



module.exports = router;
