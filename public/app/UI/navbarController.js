angular.module('app')
    // .controller('ricetteController', function ($scope, RicetteService, IngredientiService) {
    .controller('navbarController', function ($scope, $state, $rootScope) {

     


$scope.$watch('filtro', function(newValue){
     $rootScope.filtro = newValue
})

$scope.cambiaPortata = function (portata) {
    $state.go('ricette', {portata: portata})
}

$scope.cambiaAllergene = function (allergene) {
    $rootScope.allergene = allergene
    console.log(allergene)
    $state.go('ricette')
}













        // function init() {
        //     RicetteService.getAll()
        //         .then(function (risposta) {
        //             $scope.ricette = risposta.data;
        //         })
        //         .catch()

        //     IngredientiService.getAll()
        //         .then(function (risposta) {
        //             $scope.ingredienti = risposta.data;
        //             console.log ($scope.ingredienti)
        //         })
        //         .catch()
        // }
        // init()




        // async non ho capito
        // async function init() {
        //     var risposta = await RicetteService.getAll()
        //     $scope.ricette = risposta.data
        // }
        // init()

        // $scope.inseriscinuova = function () {
        //     RicetteService.postOne($scope.nuova)
        //         .then(risposta => {
        //             init()
        //         })
        // }

        // $scope.deleteOne = function (id) {
        //     RicetteService.deleteOne(id)
        //         .then(risposta => {
        //             init()
        //         })
        // }



        // var ingrediente = $scope.ingredienti.split(',')
        // $scope.nuova.ingredienti = []
        // $scope.nuova.ingredienti.push(...ingrediente)
        // $scope.ricette.splice(0, 0, { ...$scope.nuova })

        // richiama getAll

    })






