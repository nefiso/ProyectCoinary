const { Router } = require('express');
const router = Router();
const {getCrypto} = require ('../controllers/CryptoController')

// Configurar los routers
router.get('/', getCrypto);

module.exports = router;