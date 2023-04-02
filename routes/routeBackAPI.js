const { Router } = require('express');
const route = Router();

const {
    getEntries,
    addEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/controllerBackAPI');


// GET ALL ENTRIES
route.get('/', getEntries);

// ADD ENTRY
route.post('/', addEntry);

// UPDATE ENTRY
route.put('/:id', updateEntry);

// DELETE ENTRY
route.delete('/:id', deleteEntry);


module.exports = route;