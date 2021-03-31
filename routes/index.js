var express = require('express');
var router = express.Router();

//ROOT
router.get('/', (req, res, next) => {
  return res.redirect('/web');
});

module.exports = router;
