
const { Router } = require('express');
const { check } = require('express-validator');
const { esRoleValido, emailExiste,existeUsuarioPorID } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorID),
    validarCampos
]
, usuariosPut );

router.post('/',[
    check('correo',"El correo no es valido").isEmail(),
    check('correo').custom(emailExiste),
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('password',"La contraseña es obligatoria y debe contar con más de 6 letras").not().isEmpty().isLength({min:6}),
    //check('rol',"No es un rol valido").isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos 
],usuariosPost );

router.delete('/:id',[
    validarJWT,
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorID),
    validarCampos
], usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;