const { response, request } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');


const usuariosGet = async (req = request, res = response) => {
    const estadoTrue = {estado:true}
    const {limite = 5,desde = 0} = req.query;
   
    const [total,usuarios] = await Promise.all([
        Usuario.countDocuments(estadoTrue),
        Usuario.find(estadoTrue)
        .skip(parseInt(desde))
        .limit(parseInt(limite))
    ]);

    res.json({
        total,
        usuarios
    });
}

const usuariosPost = async (req, res = response) => {
    
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});
    //ENCRIPTAR LA CONTRASELA
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt)
    //GUARDAR EN BASE DE DATOS
    await usuario.save();
    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}

const usuariosPut = async(req, res = response) => {
    
    const { id } = req.params;
    const {_id,password,google,correo,...resto} = req.body;
    //TO DO validar contra base de datos
    if(password){
        //Encripta la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto)
    //await usuario.save();
    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}