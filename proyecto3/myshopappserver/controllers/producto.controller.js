const { Sequelize, Op } = require("sequelize");
const Producto = require("../models").producto;

const obtenerProductos = (req, res, next) => {
  Producto.findAll()
    .then((res) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      // res.status(404).json({ "message": "No hay productos registrados!"});
      console.log(err)
    });
};

const obtenerProductoPorId = (req, res, next) => {
    Producto.findOne({ where: { id: req.params.id } })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.status(400).send(error));
};

const crearProducto = (req, res, next) => {
  res.send("Post Works!")
};

const actualizarProducto = (req, res, next) => {
  res.send("Put Works!")
};

const eliminarProducto = (req, res, next) => {
  res.send("Delete Works!")
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
