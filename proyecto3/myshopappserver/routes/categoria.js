const express = require('express')
const {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
} = require('../controllers/categoria.controller')
const verifyToken = require('../middlewares/validate-token')
const router = express.Router()

router.get("/categorias", obtenerCategorias)

router.get("/categorias/:id",obtenerCategoriaPorId)

router.post("/categorias", verifyToken ,crearCategoria)

router.put("/categorias/:id", verifyToken,actualizarCategoria)

router.delete("/categorias/:id", verifyToken ,eliminarCategoria)

module.exports = router