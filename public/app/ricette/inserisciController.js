angular.module('app')
    // .controller('ricetteController', function ($scope, RicetteService, IngredientiService) {
    .controller('inserisciController', function ($scope, RicetteService, ingredienti, toast) {


        $scope.ingredienti = ingredienti;
        $scope.nuova = {
            ingredienti: []
        }




        $scope.aggiungi = function () {
            var ing = $scope.ingrediente
            $scope.nuova.ingredienti.push(ing)
        }
        $scope.cancella = function (id) {
            var indice = $scope.nuova.ingredienti.findIndex(ing => ing._id == id)
            $scope.nuova.ingredienti.splice(indice, 1)
        }

        
        
        $scope.inseriscinuova = function () {
            RicetteService.postOne($scope.nuova)
                .then(risposta => {
                    console.log(risposta)
                    toast({
                        duration: 10000,
                        message: "Ricetta salvata!",
                        className: "alert-success",
                        position: 'center'
                    })
                })
        }
    })


















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








