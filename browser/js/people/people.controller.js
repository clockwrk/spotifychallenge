app.controller('peopleController', function($scope, peopleFactory) {

    function countProperties(obj) {
        var count = 0;

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                ++count;
        }

        return count;
    }

    function saveResults(results) {

        if (!Array.isArray(results)) {
            $scope.currentResults = [results];
        } else {
            $scope.currentResults = results
        }
    }

    $scope.max = 0;

    $scope.people = peopleFactory.getAllPeople().then(function(people) {
        $scope.max = parseInt(countProperties(people));
    });


    $scope.currentPerson = {};

    $scope.currentResults = {};

    $scope.getPersons = function(personInfo) {
        if (!!personInfo.id) {
            $scope.getSinglePerson($scope.currentPerson);
        } else {
            $scope.getAllPeople();
        }
    }

    $scope.getAllPeople = function() {
        peopleFactory.getAllPeople()
            .then(function(response) {
                $scope.currentResults = response;
            })
            .catch();
    }

    $scope.getSinglePerson = function(personInfo) {
        peopleFactory.getSinglePerson(personInfo)
            .then(function(result) {
                if (!result.id) {
                    result = {
                        id: "No Record Found",
                        name: "No Record Found",
                        favoriteCity: "No Record Found"
                    }
                }
                $scope.currentResults = [result];
            })
            .catch();
        $scope.currentPerson = {};
    }

    $scope.postPerson = function(personInfo) {
        peopleFactory.postPerson(personInfo)
            .then(saveResults)
            .catch();
        $scope.currentPerson = {};
    }

    $scope.updatePerson = function(personInfo) {
        peopleFactory.updatePerson(personInfo)
            .then(function(results) {
                $scope.currentResults = [personInfo];
            })
            .catch();
        $scope.currentPerson = {};
    }

    $scope.deletePerson = function(personInfo) {

        peopleFactory.deletePerson(personInfo)
            .then(function() {
                $scope.currentResults = [{
                    id: 'RECORD DELETED',
                    name: 'RECORD DELETED',
                    favoriteCity: 'RECORD DELETED'
                }]
            })
            .catch()
        $scope.currentPerson = {};
    }
})