const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const { Sequelize, Op } = require("sequelize");

const loginRouter = express.Router();
const Usuario = require("../models").usuario;

loginRouter.post("/register", async (req, res) => {
  let { name, email, password, address } = req.body;
  console.log(email)
  let role = ""
  if(email.includes("admin")) {
    role = "admin"
  }else {
    role = "user"
  }
  let username = name.toLowerCase()
  
  let password_encrypted = await bcrypt.hash(password, 8);
  try {
    let usuario = await Usuario.findOne({ where: { correo: email } });
    if (usuario) {
      return res.status(400).json({ message: "El usuario ya existe!" });
    }
    let user = await Usuario.create({
      username,
      nombre: name,
      correo: email,
      password: password_encrypted,
      rol: role,
      direccion: address,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    user.save()
    res.json({ message: "Usuario Creado!"});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Ocurrio un Error, no se pudo crear usuario!" });
  }
});

loginRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ where: { correo: email } });
    if (! usuario) {
      return res.status(404).json({ message: "Usuario no encontrado, Registrate!" });
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
        .json({ message: "Ingreso Correcto!", token, role: usuario.rol, userid: usuario.id });
    }
    return res.status(400).json({ message: "Correo o Constrasena Incorrecta!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No se pudo iniciar session, intenta mas tarde!" });
  }
});

module.exports = loginRouter;
