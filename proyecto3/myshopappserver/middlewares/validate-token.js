const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if(!token ) return res.status(401).json({message: "Acceso Denegado!"})
    try {
        let verificar_Token_existe = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY)
        req.user = verificar_Token_existe
        next()
    } catch (error) {
        res.status(400).json({message: "Token no valido!"})
    }
}

module.exports = verifyToken