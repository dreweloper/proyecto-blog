const { Router } = require('express');
const router = Router();

const {
    getEntries,
    getEntry,
    searchEntries,
    showResult
} = require('../controllers/controllerFront');


// INDEX
router.get('/', getEntries);

// ENTRY DETAIL
router.get('/entry/:id', getEntry);

// TO SEARCH
router.get('/search', searchEntries); // action form value

// SEARCH RESULTS
router.get('/search-result', showResult);


module.exports = router;