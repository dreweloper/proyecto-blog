const { Router } = require('express');
const router = Router();

const validateAuth = require('../validators/auth');

const {
    formLogin,
    checkAuth,
    logoutUser
} = require('../controllers/controllerFrontAuth');


// FORM LOGIN
router.get('/login', formLogin);

// AUTH 
router.post('/auth', [ // action form value
    validateAuth
], checkAuth);

// LOG OUT
router.get('/logout', logoutUser);


module.exports = router;