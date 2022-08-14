const { Sequelize, Op } = require("sequelize");
const Categoria = require("../models").categoria;

const obtenerCategorias = (req, res, next) => {
  Categoria.findAll()
    .then((categorias) => {
      res.json(categorias);
    })
    .catch((err) => {
      res.status(500).json({ message: "No se encontraron datos. :(" });
      console.log(err);
    });
};

const obtenerCategoriaPorId = (req, res, next) => {
  Categoria.findOne({ where: { id: req.params.id } })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.status(500).send(error));
};

const crearCategoria = async (req, res, next) => {
  const { name, descripcion } = req.body;
  try {
    await Categoria.create({
      name,
      descripcion,
    },
    {
      fields: ["name", "descripcion"],
    });
    res.json({ message: "Categoria Creada!" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo crear la cateogira!" });
  }
};

const actualizarCategoria = async (req, res, next) => {
  try {
    let id_categoria = req.params.id;
    let { name, descripcion } = req.body;
    let categoria = await Categoria.findByPk(id_categoria);
    categoria.name = name;
    categoria.descripcion = descripcion;
    await categoria.save();
    res.json({ message: "Categoria Actualizada" });
  } catch (error) {
    console.log(error)  
    res.status(500).json({ message: "No se pudo actualizar la Categoria" });
  }
};

const eliminarCategoria = async (req, res, next) => {
  try {
    await Categoria.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Categoria Eliminada!" });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "La categoria no pudo ser eliminada!" });
  }
};

module.exports = {
  obtenerCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,
};
