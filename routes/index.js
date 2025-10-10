const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));
router.use('/routes', require('./routes'));

module.exports = router;