var express = require('express');
var router = express.Router();

const itemRepo = require('../../web-svc-repo/main').itemRepo;

router.get('/', (req, res, next) => {
    let queryData = {
        offset: req.query.offset
    };
    queryData.query = req.query.query ? req.query.query : null;
    itemRepo.getAllItems(queryData, data => {
        console.log(data);
        return res.json(data);
    });
});

router.get('/:gameId', (req, res, next) => {
    itemRepo.getItemInfo((req.params.gameId), data => {
        return res.json(data);
    });
});

module.exports = router;
