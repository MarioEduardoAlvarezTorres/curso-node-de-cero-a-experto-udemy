const { response } = require("express");
const bcryptjs = require('bcryptjs')
const Usuario = require("../models/usuario")

const login = async (req, res = response) =>{
    const {correo,password} =req.body;
    try {
        //VERIFICAR SI EL EMAIL EXISTE
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(400).json({
                msg:`Usuario / Password no son correctos - correo`
            })
        }
        //VERIFICAR SI EL USUARIO ESTA ACTIVO
        if(usuario.estado === false){
            return res.status(400).json({
                msg:`Usuario no activo`
            })
        }
        //VERIFICAR LA CONTRASEÑA
        const validPassword = bcryptjs.compareSync(password,usuario.password);

        if(!validPassword){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - password'
            })
        }
        //GENERAR EL JWT
        res.json({
            msg:'Login ok',
            correo,
            password
        }) 
    } catch (error) {
        return res.status(500).json({
            msg:"Algo salió mal"
        })
    }
}

module.exports = {
    login
}