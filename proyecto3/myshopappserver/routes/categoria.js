const express = require('express')
const {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
} = require('../controllers/categoria.controller')
const router = express.Router()

router.get("/categorias", obtenerCategorias)

router.get("/categorias/:id", obtenerCategoriaPorId)

router.post("/categorias", crearCategoria)

router.put("/categorias/:id", actualizarCategoria)

router.delete("/categorias/:id", eliminarCategoria)

module.exports = router