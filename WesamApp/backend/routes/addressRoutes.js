const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/addresses', addressController.getAllAddresses);
router.post('/addresses', addressController.addAddress);
router.put('/addresses/:id', addressController.editAddress);
router.delete('/addresses/:id', addressController.deleteAddress);

module.exports = router;