const { Router } = require('express');
const { check } = require('express-validator');

const {validarJWT, validarCampos,esAdminRole,existeCategoriaPorId} = require('../middlewares')
const {crearCategoria,borrarCategoria,obtenerCategoria,obtenerCategoriabyId,actualizarCategoria} = require('../controllers/categorias')

const router = Router();

// Obtener todas las categorias - publico 
router.get('/',obtenerCategoria)

// Obtener una categoria por id - publico 
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
    check('id').custom( existeCategoriaPorId ),
], obtenerCategoriabyId );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [ 
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria );

// Actualizar - privado - cualquiera con token válido
router.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos,
    check('id').custom( existeCategoriaPorId ),
],actualizarCategoria );

// Borrar una categoria - Admin
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
    check('id').custom( existeCategoriaPorId ),
],borrarCategoria);

module.exports = router;