const { Router } = require('express');
const router = Router();

const {
    getEntries,
    getEntry,
    addEntry,
    updateEntry,
    deleteEntry,
} = require('../controllers/controllerBackAPI');


// GET ALL ENTRIES
router.get('/', getEntries);

// GET ENTRY
router.get('/:id', getEntry);

// ADD ENTRY
router.post('/', addEntry);

// UPDATE ENTRY
router.put('/:id', updateEntry);

// DELETE ENTRY
router.delete('/:id', deleteEntry);


module.exports = router;