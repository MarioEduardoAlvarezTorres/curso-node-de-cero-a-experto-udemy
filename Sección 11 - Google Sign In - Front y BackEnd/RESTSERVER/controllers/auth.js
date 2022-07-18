const { response, json } = require("express");
const bcryptjs = require('bcryptjs')
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");
const { verify } = require("../helpers/google-verify");

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
        const token = await generarJWT(usuario.id)
        res.json({
            usuario,
            token
        }) 
    } catch (error) {
        return res.status(500).json({
            msg:"Algo salió mal"
        })
    }
}

const googleSingIn = async (req,res = response) =>{
    const {id_token} = req.body;

    try {
        const {nombre,img,correo} = await verify(id_token) 
        let usuario = await Usuario.findOne({correo});
        if(!usuario){
            //SE CREA USUARIO
            const data = {
                nombre,
                correo,
                password: ";P",
                img,
                rol: "USER_ROLE",
                google: true,
            };

            usuario = new Usuario(data);
            await usuario.save();
        }

        //SI EL USUARIO DE DB
        if(!usuario.estado){
            return res.status(401).json({
                msg:"Hable con el admon, usuario bloqueado"
            })
        }
        //GENERAR EL JWT
        const token = await generarJWT(usuario.id)
        res.json({
            usuario,
            token
        })


    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:"El token no se pudo verificar"
        })
    }
    
}

module.exports = {
    login,
    googleSingIn
}