const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const { Sequelize, Op } = require("sequelize");
const Usuario = require("../models").usuario;

const verifyToken = (req, res, next) => {
    const header = req.headers['authorization']
    if(!header ) return res.status(401).json({message: "Acceso Denegado, Identificate!"})
    try {
        let token = header.split(" ")[1]
        let verificar_Token_existe = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY)
        req.user = verificar_Token_existe
        next()
    } catch (error) {
        res.status(400).json({message: "Token no valido!"})
    }
}

const verificarRoleAuth = (roles) => async (req, res, next) => {
    const token = req.headers['authorization'].split(' ').pop()
    let tokenData;
    try {
        tokenData = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY)
    } catch (error) {
        res.status(400).json({message: "Token no valido!"})
    }
    let id_user = tokenData.user.id
    console.log(id_user)
    const userData = await Usuario.findByPk(id_user)
    if([].concat(roles).includes(userData.dataValues.rol)) {
        next()
    } else {
        res.status(401)
        res.send({message: "No tienes permisos."})
    }
}

module.exports = {
    verifyToken,
    verificarRoleAuth
}