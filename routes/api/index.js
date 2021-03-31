var express = require('express');
var router = express.Router();

router.use('/items', require('./items'));
router.use('/worlds', require('./worlds'));

module.exports = router;
