const router = require('express').Router();
let standard = require('../models/standard');
let dayjs = require('dayjs');

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)




router.route('/rbos').get((req, res) => {
    standard('rbos').find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});