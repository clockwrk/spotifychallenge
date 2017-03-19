let express = require('express');
let router = express.Router();
let People = require('../../db/models/people.js');
module.exports = router;

router.get('/', function(req, res, next) {

    People.findAll({})
        .then(function(people) {
            console.log('people', people)
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

    Project.destroy({
            where: { id: req.params.id }
        })
        .then(function() {
            res.send(204)
        })
        .catch(next)
})