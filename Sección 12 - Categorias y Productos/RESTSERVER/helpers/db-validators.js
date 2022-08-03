
const {Role,Categoria,Usuario} = require('../models')

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
        throw new Error(`Usuario con ID:${id} no existe.`)
    }
}

const existeCategoriaPorId = async( id ) => {

    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorID,
    existeCategoriaPorId
}