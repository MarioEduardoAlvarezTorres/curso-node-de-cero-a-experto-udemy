
const Role = require('../models/role')
const Usuario = require('../models/usuario')
const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la BD`)
    }
}

//VERIFICAR SI EL CORREO EXISTE
const emailExiste = async(correo ='')=>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`${correo} ya fue registrado.`)
    }
}

const existeUsuarioPorID = async(id)=>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`Usaurio con ID:${id} no existe.`)
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorID
}