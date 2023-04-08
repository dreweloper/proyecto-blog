const { Router } = require('express');
const router = Router();

const {
    getEntries,
    getEntry,
    searchEntries
} = require('../controllers/controllerFront');


// INDEX
router.get('/', getEntries);

// ENTRY DETAIL
router.get('/entry/:id', getEntry);

// SEARCH - SHOW RESULT
router.get('/search', searchEntries); // action form value


module.exports = router;