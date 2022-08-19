const express = require("express");
const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/producto.controller");
const {
  verifyToken,
  verificarRoleAuth,
} = require("../middlewares/validate-token");

const router = express.Router();

router.get(
  "/productos",
  verifyToken,
  verificarRoleAuth(["admin", "user"]),
  obtenerProductos
);

router.get(
  "/productos/:id",
  verifyToken,
  verificarRoleAuth(["admin", "user"]),
  obtenerProductoPorId
);

router.post(
  "/productos",
  verifyToken,
  verificarRoleAuth(["admin"]),
  crearProducto
);

router.put(
  "/productos/:id",
  verifyToken,
  verificarRoleAuth(["admin"]),
  actualizarProducto
);

router.delete(
  "/productos/:id",
  verifyToken,
  verificarRoleAuth(["admin"]),
  eliminarProducto
);

module.exports = router;
