var express = require('express');
var router = express.Router();
var Job = require('../models/job');

router.get('/', function (req, res, next) {
        res.render('index');
});

module.exports = router;
