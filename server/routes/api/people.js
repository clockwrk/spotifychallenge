let express = require('express');
let router = express.Router();
let People = require('../../db/models/people.js');
module.exports = router;

router.get('/', function(req, res, next) {
    People.findAll({})
        .then(function(people) {
            res.send(people);
        })
        .catch(next);
});

router.get('/:peopleId', function(req, res, next) {
    People.findById(req.params.peopleId)
        .then(function(person) {
            person = person || {};
            res.send(person);
        })
        .catch(next);
});

router.post('/', function(req, res, next) {
    People.create(req.body)
        .then(function(person) {
            res.send(person);
        })
        .catch(next);
});

router.put('/:peopleId', function(req, res, next) {
    People.update(req.body, {
            where: { id: req.params.peopleId }
        })
        .then(function(person) {
            person = person || {};
            res.send(person);
        })
        .catch(next);
});

router.delete('/:peopleId', function(req, res, next) {
    People.destroy({
            where: { id: parseInt(req.params.peopleId) }
        })
        .then(function() {
            res.sendStatus(204)
        })
        .catch(next)
})