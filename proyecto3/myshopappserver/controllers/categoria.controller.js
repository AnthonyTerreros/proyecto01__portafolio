const { Sequelize, Op } = require("sequelize");
const Categoria = require("../models").categoria;

const obtenerCategorias = (req, res, next) => {
    Categoria.findAll()
    .then((res) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      res.status(404).json({ message: "No hay productos registrados!" });
    });
};

const obtenerCategoriaPorId = (req, res, next) => {
    Categoria.findOne({ where: { id: req.params.id } })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.status(400).send(error));
};

const crearCategoria = (req, res, next) => {
  res.send("Post Works!")
};

const actualizarCategoria = (req, res, next) => {
    res.send("Put Works!")
};

const eliminarCategoria = (req, res, next) => {
    res.send("Delete Works!")
};

module.exports = {
  obtenerCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria
};
