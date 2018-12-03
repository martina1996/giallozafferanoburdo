angular.module('app')
    .service('IngredientiService', function ($http) {
        var getAll = function () {
            return $http({
                url: '/ingredienti',
                method: 'GET'
            })}
        // var postOne = function (nuova) {
        //     return $http({
        //         url: '/ricette',
        //         method: 'POST',
        //         data: nuova
        //     })}
        // var deleteOne = function (id) {
        //     return $http({
        //         url: '/ricette/' + id,
        //         method: 'DELETE'
        //     })}
        



        return {
            getAll:getAll,
            // postOne: postOne,
            // deleteOne: deleteOne
        }
    })
