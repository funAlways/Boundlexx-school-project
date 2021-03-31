var express = require('express');
var router = express.Router();

const worldRepo = require('../../web-svc-repo/main').worldRepo;

router.get('/', (req, res, next) => {
    worldRepo.getAllWorlds(data => {
        return res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    worldRepo.getWorldInfo((req.params.id), data => {
        return res.json(data);
    });
});

module.exports = router;
