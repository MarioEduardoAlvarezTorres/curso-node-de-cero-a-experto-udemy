const { response } = require("express");
const {Categoria} = require('../models')

//obtenerCategoria - paginado - total - populate
const obtenerCategoria = async(req,res=response)=>{
    const estadoTrue = {estado:true}
    const {limite = 5,desde = 0} = req.query;
   
    const [total,categorias] = await Promise.all([
        Categoria.countDocuments(estadoTrue),
        Categoria.find(estadoTrue)
        .populate("usuario","nombre")
        .skip(parseInt(desde))
        .limit(parseInt(limite))
    ]);

    res.json({
        total,
        categorias
    });
}
//obtenerCategoria - populate {}
const obtenerCategoriabyId = async(req,res=response)=>{
    const {id} = req.params;
    const categoria = await Categoria.findById(id);
    res.json(categoria)
}
const crearCategoria = async(req, res = response ) => {
    const nombre = req.body.nombre.toUpperCase();
    const categoriaDB = await Categoria.findOne({ nombre });

    if ( categoriaDB ) {
        return res.status(400).json({
            msg: `La categoria ${ categoriaDB.nombre }, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = new Categoria( data );

    // Guardar DB
    await categoria.save();

    res.status(201).json(categoria);

}

const actualizarCategoria = async( req, res = response ) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    data.nombre  = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true });

    res.json( categoria );

}

const borrarCategoria = async(req, res =response ) => {

    const { id } = req.params;
    const categoriaBorrada = await Categoria.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( categoriaBorrada );
}


module.exports = {
    crearCategoria,
    obtenerCategoria,
    obtenerCategoriabyId,
    actualizarCategoria,
    borrarCategoria
}