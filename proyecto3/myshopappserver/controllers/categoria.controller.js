const { Sequelize, Op } = require("sequelize");
const Categoria = require("../models").categoria;

const obtenerCategorias = (req, res, next) => {
    Categoria.findAll()
    .then((categorias) => {
      res.json(categorias);
    })
    .catch((err) => {
      // res.send(404).json({ message: "No hay categorias registrados!" });
      res.json({"message": "No se encontraron datos. :("})
      console.log(err)
    });
};

const obtenerCategoriaPorId = (req, res, next) => {
    Categoria.findOne({ where: { id: req.params.id } })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.send(400).send(error));
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
