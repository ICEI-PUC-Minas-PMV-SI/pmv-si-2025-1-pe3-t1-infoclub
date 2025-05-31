const express = require('express');
const router = express.Router();
const depoimentoController = require('../controllers/depoimentoController');

router.post('/incluirComentario', depoimentoController.incluirComentario);
router.get('/obterComentarios', depoimentoController.obterComentarios);
router.delete('/excluirComentario/:id', depoimentoController.excluirComentario); // novo 
router.put('/editarComentario/:id', depoimentoController.editarComentario); // novo

    
module.exports = router;

