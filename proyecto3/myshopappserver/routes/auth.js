const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const { Sequelize, Op } = require("sequelize");

const loginRouter = express.Router();
const Usuario = require("../models").usuario;

loginRouter.post("/register", async (req, res) => {
  let { username, nombre, correo, password, direccion } = req.body;
  let role = ""
  console.log(correo)
  if(correo.includes("admin")) {
    role = "admin"
  }else {
    role = "user"
  }
  
  let password_encrypted = await bcrypt.hash(password, 8);
  try {
    let usuario = await Usuario.findOne({ where: { correo: correo } });
    if (usuario) {
      return res.status(200).json({ message: "El usuario ya existe!" });
    }
    let user = await Usuario.create({
      username,
      nombre,
      correo,
      password: password_encrypted,
      rol: role,
      direccion,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json({ message: "Usuario Creado!"});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Ocurrio un Error, no se pudo crear usuario!" });
  }
});

loginRouter.post("/login", async (req, res) => {
  let { correo, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ where: { correo: correo } });
    if (!usuario) {
      res.status(404).json({ message: "Usuario no encontrado, Registrate!" });
    }
    let verificar_password = await bcrypt.compare(password, usuario.password);
    if (verificar_password) {
      let token = jwt.sign(
        {
          user: usuario,
          expiresIn: "1d",
        },
        process.env.JWT_TOKEN_SECRET_KEY  
      );
      return res
        .header("authorization", token)
        .json({ message: "Ingreso Correcto!", token });
    }
    return res.json({ message: "Correo o Constrasena Incorrecta!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "No se pudo iniciar session, intenta mas tarde!" });
  }
});

module.exports = loginRouter;
