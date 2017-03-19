app.factory('peopleFactory', function($http) {

    function getData(response) {
        return response.data;
    }

    return {
        getAllPeople: function() {

            return $http.get('/api/people')
                .then(getData)
                .catch()
        },
        getSinglePerson: function(personInfo) {
            return $http.get('/api/people/' + personInfo.id)
                .then(getData)
                .catch()
        },
        postPerson: function(personInfo) {
            return $http.post('/api/people', personInfo)
                .then(getData)
                .catch()
        },
        updatePerson: function(personInfo) {
            return $http.put('/api/people/' + personInfo.id, personInfo)
                .then(getData)
                .catch()
        },
        deletePerson: function(personInfo) {
            return $http.delete('/api/people/' + personInfo.id)
                .then(getData)
                .catch()
        }
    }
})