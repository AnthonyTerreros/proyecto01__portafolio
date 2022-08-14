var express = require('express');
const crearUsuario = require('../controllers/usuario.controller');
var router = express.Router();

router.post('/registrarse', crearUsuario)

module.exports = router;
