app.factory('peopleFactory', function($http) {

    let getData = function(response) {
        return response.data
    }

    return {
        getAllPeople: function() {
            return $http.get('/api/people')
                .then(getData)
                .catch()
        },
        getSinglePerson: function(personId) {
            return $htpp.get('/api/people/' + personId)
                .then(getData)
                .catch()
        },
        postPerson: function(personInfo) {
            return $http.post('/api/people', personInfo)
                .then(getData)
                .catch()
        },
        updatePerson: function(personInfo) {
            return $http.put('/api/people' + personInfo.id, personInfo)
                .then(getData)
                .catch()
        },
        deletePerson: function(personId) {
            return $http.delete('/api/people' + personId)
                .then(getData)
                .catch()
        }
    }
})