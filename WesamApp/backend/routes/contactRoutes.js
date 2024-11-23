const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contacts', contactController.getAllContacts);
router.post('/contacts', contactController.addContact);
router.put('/contacts/:id', contactController.editContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;