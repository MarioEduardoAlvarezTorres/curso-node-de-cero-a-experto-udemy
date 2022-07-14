const jwt = require('jsonwebtoken')
const {response,resquest, request} = require('express')

const validarJWT = (req=request,res = response,next) =>{
    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            msg:'No hay token en la petición'
        })
    }
    //VALIDACION DEL TOKEN
    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.uid = uid;
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