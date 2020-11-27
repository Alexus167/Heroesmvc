const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.heroe);

router.get('/detalle/:id', heroesController.detalleHeroe);

router.get('/bio/:id/:ok?' , heroesController.detalleOpcional);



module.exports = router;