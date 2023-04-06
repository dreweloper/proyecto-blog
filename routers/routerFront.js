const { Router } = require('express');
const router = Router();

const {
    getEntries,
    getEntry,
    searchEntries,
    formLogin,
    checkAuth,
    logoutUser
} = require('../controllers/controllerFront');


// INDEX
router.get('/', getEntries);

// ENTRY DETAIL
router.get('/entry/:id', getEntry);

// SEARCH - SHOW RESULT
router.get('/search', searchEntries); // action form value

// FORM LOGIN
router.get('/login', formLogin);

// AUTH 
router.post('/auth', checkAuth); // action form value

// LOG OUT
router.get('/logout', logoutUser);


module.exports = router;