const { Router } = require('express');
const router = Router();

const {
    getEntries,
    formAddEntry,
    addEntry,
    formUpdateEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/controllerFrontAdmin');


// INDEX-ADMIN
router.get('/', getEntries);

// FORM NEW ENTRY
router.get('/form-new', formAddEntry);

// ADD NEW ENTRY
router.post('/add', addEntry);

// FORM UPDATE ENTRY
router.get('/form-edit/:id', formUpdateEntry);

// UPDATE ENTRY
router.post('/update/:id', updateEntry);

// DELETE ENTRY
router.get('/delete/:id', deleteEntry);


module.exports = router;