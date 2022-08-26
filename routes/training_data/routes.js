const router = require('express').Router();
let standard = require('../../models/standard');


router.route('/rbos').get((req, res) => {
    standard('rbos').find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

