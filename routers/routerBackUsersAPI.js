const { Router } = require('express');
const router = Router();

const { loginUser, renewToken } = require('../controllers/controllerBackUsersAPI');


// LOGIN
router.post('/', loginUser);

// RENEW JWT
router.get('/renew', renewToken);


module.exports = router;