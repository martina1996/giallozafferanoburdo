angular.module('app')
    .service('RicetteService', function ($http) {
     
        var getAll = function (portata) {
            var url = portata ? 'api/ricette?portata=' + portata : 'api/ricette'
            return $http({
                url: url,
                method: 'GET'
            })}
        var postOne = function (nuova) {
            return $http({
                url: 'api/ricette',
                method: 'POST',
                data: nuova
            })}
        var deleteOne = function (id) {
            return $http({
                url: 'api/ricette/' + id,
                method: 'DELETE'
            })}
        
        var getOne = function (id) {
            return $http({
                url: 'api/ricette/' + id,
                method: 'GET'
            })
        }



        return {
            getAll:getAll,
            postOne: postOne,
            deleteOne: deleteOne,
            getOne: getOne
        }
    })
