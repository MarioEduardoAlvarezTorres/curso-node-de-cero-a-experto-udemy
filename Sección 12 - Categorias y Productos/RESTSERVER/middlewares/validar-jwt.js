const jwt = require('jsonwebtoken')
const {response,resquest, request} = require('express')
const Usuario = require('../models/usuario')

const validarJWT = async(req=request,res = response,next) =>{
    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            msg:'No hay token en la petición'
        })
    }
    //VALIDACION DEL TOKEN
    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //LEER EL USUARIO QUE CORRESPONDE AL UID
        const usuario = await Usuario.findById(uid)
        //VALIDAR QUE EL USUARIO EXISTA
        if(!usuario){
            return res.status(401).json({
                msg:'Token no válido - usuario no existe DB'
            })
        }
        //VERIFICAR SI EL UID TIENE ESTADO TRUE
        if(!usuario.estado){
            return res.status(401).json({
                msg:'Token no válido - usuario con estado:false'
            })
        }
        
        req.usuario = usuario;
        next();
    } catch (error) {
        console.log("hola2")
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = {
    validarJWT
}