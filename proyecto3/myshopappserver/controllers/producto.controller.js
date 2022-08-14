const { Sequelize, Op } = require("sequelize");
const Producto = require("../models").producto;

const obtenerProductos = (req, res, next) => {
  Producto.findAll({attributes: {exclude: ['categoriumId']}})
    .then((productos) => {
      res.json(productos);
    })
    .catch((err) => {
      res.status(500).json({ "message": "No hay productos registrados!"});
      console.log(err);
    });
};

const obtenerProductoPorId = (req, res, next) => {
  Producto.findOne({ where: { id: req.params.id } })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.send(error));
};

const crearProducto = (req, res, next) => {
  res.send("Post Works!");
};

const actualizarProducto = (req, res, next) => {
  res.send("Put Works!");
};

const eliminarProducto = (req, res, next) => {
  res.send("Delete Works!");
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
