const bcrypt = require('bcryptjs')

const Usuario = require("../models").usuario;

const crearUsuario = async (req, res) => {
    let {username, nombre, correo, password, direccion} = req.body
    let password_encrypted = await bcrypt.hash(password, 8)
    try {
        let user = await Usuario.create({username, nombre, correo, password: password_encrypted, direccion, createdAt: new Date(), updatedAt: new Date()})
        res.json({message: "Usuario Creado!", user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Ocurrio un Error, no se pudo crear usuario!"})
    }
}

module.exports = crearUsuario