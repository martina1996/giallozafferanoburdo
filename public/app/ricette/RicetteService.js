angular.module('app')
    .service('RicetteService', function ($http) {
        
        
        
        var getAllIngredienti = function () {
            return $http({
                url: '/ingredienti',
                method: 'GET'
            })
        }
        

        var getAll = function () {
            return $http({
                url: '/ricette',
                method: 'GET'
            })}
        var postOne = function (nuova) {
            return $http({
                url: '/ricette',
                method: 'POST',
                data: nuova
            })}
        var deleteOne = function (id) {
            return $http({
                url: '/ricette/' + id,
                method: 'DELETE'
            })}
        



        return {
            getAll:getAll,
            postOne: postOne,
            deleteOne: deleteOne,
            getAllIngredienti: getAllIngredienti
        }
    })
