const bcrypt = require('bcryptjs')

const Usuario = require("../models").usuario;

const getUsuarios = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({message: "Error no se pudo consultar los usuarios!"})
    }
}  

module.exports = getUsuarios