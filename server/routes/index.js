'use strict';

let router = require('express').Router();

router.use('/people', require('./api/people.js'));

module.exports = router;