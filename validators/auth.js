const { check } = require('express-validator');
const validate = require('../middlewares/validateResult');


const validateAuth = [
    check('email')
        .isEmail()
        .withMessage('Debe introducir un e-mail válido.'),
    check('password')
        .isLength( { min: 6, max: 10 } )
        .withMessage('La contraseña debe tener entre 4 y 10 caracteres.'),
    (req, res, next) => {
        validate(req, res, next, 'login');
    }
];


module.exports = validateAuth;