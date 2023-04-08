const { Router } = require('express');
const router = Router();

const {
    formLogin,
    checkAuth,
    logoutUser
} = require('../controllers/controllerFrontAuth');


// FORM LOGIN
router.get('/login', formLogin);

// AUTH 
router.post('/auth', checkAuth); // action form value

// LOG OUT
router.get('/logout', logoutUser);


module.exports = router;