const { Router } = require('express');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/controllerBackUsersAPI');


// REGISTER
router.post('/register', createUser);

// LOGIN
router.post('/login', loginUser);

// RENEW JWT
router.get('/renew', renewToken);


module.exports = router;