const { Router } = require('express');
const route = Router();

const {
    getEntries,
    getEntry,
    addEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/controllerBackAPI');


// GET ALL ENTRIES
route.get('/', getEntries);

// GET ENTRY
route.get('/:id', getEntry);

// ADD ENTRY
route.post('/', addEntry);

// UPDATE ENTRY
route.put('/:id', updateEntry);

// DELETE ENTRY
route.delete('/:id', deleteEntry);


module.exports = route;