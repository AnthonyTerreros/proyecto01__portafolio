const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

const loginRouter = express.Router();

const { Sequelize, Op } = require("sequelize");
const Usuario = require("../models").usuario;
const dotenv = require('dotenv').config();

loginRouter.post("/login", async (req, res) => {
    let {correo, password} = req.body;
    try {
        let usuario = await Usuario.findOne({where: {correo: correo}})
    if(!usuario) {
        res.status(404).json({message: "Usuario no encontrado, Registrate!"})
    }
    let verificar_password = await bcrypt.compare(password, usuario.password)
    if(verificar_password) {
        let token = jwt.sign({
            user: usuario,
            expiresIn: '1d',
        }, process.env.JWT_TOKEN_SECRET_KEY)
        return res.json({message: "Ingreso Correcto", token})
    }
    return res.json({message: "Correo o Constrasena Incorrecta!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "No se pudo iniciar session, intenta mas tarde!"})
    }
});

module.exports = loginRouter
