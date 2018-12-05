angular.module('app')
    // .controller('ricetteController', function ($scope, RicetteService, IngredientiService) {
    .controller('ingredientiController', function ($scope, ingredienti) {

        $scope.ingredienti = ingredienti;
        console.log($scope.ingredienti);
    })