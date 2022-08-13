const express = require("express");
const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/producto.controller");

const router = express.Router();

router.get("/productos", obtenerProductos);

router.get("/productos/:id", obtenerProductoPorId);

router.post("/productos", crearProducto);

router.put("/productos/:id", actualizarProducto);

router.delete("/productos/:id", eliminarProducto);

module.exports = router;
