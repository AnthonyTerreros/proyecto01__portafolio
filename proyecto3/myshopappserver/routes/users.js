var express = require('express');
const getUsuarios = require('../controllers/usuario.controller');
const {verifyToken, verificarRoleAuth} = require('../middlewares/validate-token');
var router = express.Router();

router.get('/usuarios', verifyToken, verificarRoleAuth(['admin']) ,getUsuarios)

module.exports = router;
