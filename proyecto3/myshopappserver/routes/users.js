var express = require('express');
const getUsuarios = require('../controllers/usuario.controller');
const verifyToken = require('../middlewares/validate-token');
var router = express.Router();

router.get('/usuarios' ,getUsuarios)

module.exports = router;
