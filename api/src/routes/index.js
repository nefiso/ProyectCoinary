const { Router } = require('express');
const router = Router();
const cryptoRouter = require('./cryptoRoute')

// Configurar los routers
router.use('/crypto', cryptoRouter);

module.exports = router;