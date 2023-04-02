const { Router } = require('express');
const router = Router();

const {
    getEntries,
    addEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/controllerBackAPI');


// GET ALL ENTRIES
router.get('/', getEntries);

// ADD ENTRY
router.post('/', addEntry);

// UPDATE ENTRY
router.put('/:id', updateEntry);

// DELETE ENTRY
router.delete('/:id', deleteEntry);


module.exports = router;