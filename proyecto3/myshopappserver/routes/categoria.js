const express = require("express");
const {
  obtenerCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,
} = require("../controllers/categoria.controller");
const {
  verifyToken,
  verificarRoleAuth,
} = require("../middlewares/validate-token");
const router = express.Router();

router.get(
  "/categorias",
  verifyToken,
  verificarRoleAuth(["admin", "user"]),
  obtenerCategorias
);

router.get(
  "/categorias/:id",
  verifyToken,
  verificarRoleAuth(["admin", "user"]),
  obtenerCategoriaPorId
);

router.post(
  "/categorias",
  verifyToken,
  verificarRoleAuth(["admin"]),
  crearCategoria
);

router.put(
  "/categorias/:id",
  verifyToken,
  verificarRoleAuth(["admin"]),
  actualizarCategoria
);

router.delete(
  "/categorias/:id",
  verifyToken,
  verificarRoleAuth(["admin"]),
  eliminarCategoria
);

module.exports = router;
