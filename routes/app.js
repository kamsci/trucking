var express = require('express');
var router = express.Router();
var Job = require('../models/job');

router.get('/jobs', function (req, res, next) {
    console.log("/job hit");
    Job.find({}, function (err, result) {
        if (err) {
            return res.status(404).json({
                title: "Error in save message",
                error: err.message,
            });
        };
        res.status(200).json({
            title: "Save success",
            result: result
        });
    })
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
