const { Router } = require('express');
const router = Router();

const {
    getEntries,
    getEntry
} = require('../controllers/controllerFront');


// INDEX
router.get('/', getEntries);

// ENTRY DETAIL
router.get('/entry/:id', getEntry);


module.exports = router;