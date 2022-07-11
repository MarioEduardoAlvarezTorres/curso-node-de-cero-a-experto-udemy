
const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/',[
    check('correo',"El correo no es valido").isEmail(),
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('password',"La contraseña es obligatoria y debe contar con más de 6 letras").not().isEmpty().isLength({min:6}),
    check('rol',"No es un rol valido").isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos 
],usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;