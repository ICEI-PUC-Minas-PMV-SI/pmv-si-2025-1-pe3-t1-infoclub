const express = require('express');
const router = express.Router();
const depoimentoController = require('../controllers/depoimentoController');

router.post('/incluirComentario', depoimentoController.incluirComentario);
router.get('/obterComentarios', depoimentoController.obterComentarios);

    
module.exports = router;

