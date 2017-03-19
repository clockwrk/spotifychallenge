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
        } else if (results === 204) {
            $scope.currentResults = [{
                id: 'RECORD DELETED',
                name: 'RECORD DELETED',
                favoriteCity: 'RECORD DELETED'
            }]

        } else {
            $scope.currentResults = results
        }
    }

    $scope.max = 0;

    $scope.people = peopleFactory.getAllPeople().then(function(people) {
        $scope.max = parseInt(countProperties(people));
        console.log($scope.max)
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
        console.log('Get all people')
        peopleFactory.getAllPeople()
            .then(function(response) {
                $scope.currentResults = response;
            })
            .catch();
    }

    $scope.getSinglePerson = function(personInfo) {
        console.log('Get single Person', personInfo)
        peopleFactory.getSinglePerson(personInfo)
            .then(saveResults)
            .catch();
        console.log('results', $scope.currentResults)
        $scope.currentPerson = {};
    }

    $scope.postPerson = function(personInfo) {
        console.log("post one person", personInfo);
        peopleFactory.postPerson(personInfo)
            .then(saveResults)
            .catch();
        console.log("results", $scope.currentResults)
        $scope.currentPerson = {};
    }

    $scope.updatePerson = function(personInfo) {
        console.log('update one person', personInfo)
        peopleFactory.updatePerson(personInfo)
            .then(saveResults)
            .catch();
        console.log('results', $scope.currentResults)
        $scope.currentPerson = {};
    }

    $scope.deletePerson = function(personInfo) {
        console.log('delete one person', personInfo)
        peopleFactory.deletePerson(personInfo.id)
            .then(saveResults)
            .catch();
        console.log('results', $scope.currentResults)
        $scope.currentPerson = {};
    }
})