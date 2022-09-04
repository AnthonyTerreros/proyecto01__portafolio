const { Sequelize, Op } = require("sequelize");
const Producto = require("../models").producto;
const Categoria = require("../models").categoria;

const obtenerProductos = (req, res, next) => {
  Producto.findAll({
    include: { model: Categoria, required: true },
    attributes: { exclude: ["categoriumId", "createdAt", "updatedAt", "categoriaId"] }
  })
    .then((productos) => {
      res.json(productos);
    })
    .catch((err) => {
      res.status(500).json({ message: "No hay productos registrados!" });
      console.log(err);
    });
};

const obtenerProductoPorId = (req, res, next) => {
  Producto.findOne({
    attributes: { exclude: ["categoriumId"] },
    where: { id: req.params.id },
  })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.send(error));
};

const crearProducto = async (req, res, next) => {
  const { name, stock, url_imagen, precio, categoriaId } = req.body;
  try {
    await Producto.create(
      {
        name,
        stock,
        url_imagen,
        precio,
        categoriaId,
      },
      {
        fields: ["name", "stock", "url_imagen", "precio", "categoriaId"],
      }
    );
    res.json({ message: "Producto Creado!" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo crear el producto!" });
  }
};

const actualizarProducto = async (req, res, next) => {
  try {
    let id_pk = req.params.id;
    const { name, stock, url_imagen, precio, categoriaId } = req.body;
    let producto = await Producto.findByPk(id_pk);
    producto.name = name;
    producto.stock = stock;
    producto.url_imagen = url_imagen;
    producto.precio = precio;
    producto.categoriaId = categoriaId;
    await producto.save();
    res.json({ message: "Producto Actualizado!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "No se pudo actualizar el producto. Intenta mas tarde!",
      });
  }
};

const eliminarProducto = async (req, res, next) => {
  try {
    await Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Producto Eliminada!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "El Producto no pudo ser eliminada!" });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
