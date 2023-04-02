const { Router } = require('express');
const router = Router();


// INDEX-ADMIN
router.get('/');

// FORM NEW ENTRY
router.get('/form-new');

// ADD NEW ENTRY
router.post('/add');

// FORM UPDATE ENTRY
router.get('/form-edit');

// UPDATE ENTRY
router.post('/update');

// DELETE ENTRY
router.get('/delete');


module.exports = router;