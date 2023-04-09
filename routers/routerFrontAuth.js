const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');

const validateInputs = require('../middlewares/validateInputs');

const {
    formLogin,
    checkAuth,
    logoutUser
} = require('../controllers/controllerFrontAuth');


// FORM LOGIN
router.get('/login', formLogin);

// AUTH 
router.post('/auth', [ // action form value
    check('email')
    .isEmail()
    .withMessage('Debe introducir un e-mail válido.'),
    check('password')
    .isLength( { min:6, max:10 } )
    .withMessage('La contraseña debe tener entre 4 y 10 caracteres.'),
    validateInputs
], checkAuth);

// LOG OUT
router.get('/logout', logoutUser);


module.exports = router;