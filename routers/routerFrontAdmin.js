const { Router } = require('express');
const router = Router();

// admin controllers
const {
    getEntries,
    formAddEntry,
    addEntry,
    formUpdateEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/controllerFrontAdmin');

// JWT middleware
const verifyJWT = require('../middlewares/verifyJWT');

// multer middleware
const upload = require('../middlewares/uploadImage');


// INDEX-ADMIN
router.get('/', getEntries);

// FORM NEW ENTRY
router.get('/form-new', formAddEntry);

// ADD NEW ENTRY
router.post('/add', [
    upload
], addEntry);

// FORM UPDATE ENTRY
router.get('/form-edit/:id', formUpdateEntry);

// UPDATE ENTRY
router.post('/update/:id', [
    upload
], updateEntry);

// DELETE ENTRY
router.get('/delete/:id', deleteEntry);


module.exports = router;