var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    return res.render('index');
});

router.get('/item', (req, res, next) => {
    return res.render('item-info');
});

router.get('/worlds', (req, res, next) => {
    return res.render('world-list');
});

router.get('/world', (req, res, next) => {
    return res.render('world-info');
});
module.exports = router;
