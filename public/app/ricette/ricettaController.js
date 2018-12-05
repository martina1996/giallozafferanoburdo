angular.module('app')
    // .controller('ricetteController', function ($scope, RicetteService, IngredientiService) {
    .controller('ricettaController', function ($scope, ricetta, RicetteService, $state, ingredienti, $state, toast) {

        $scope.ricetta = ricetta;

        $scope.ingredienti = ingredienti;


        $scope.modifica = function () {

            var ids = [];
            $scope.ricetta.ingredienti.forEach(ing => ids.push(ing._id))
            $scope.ricetta.ingredienti = ids

            RicetteService.putOne($scope.ricetta._id, $scope.ricetta)
                .then(risposta => {

                    toast({
                        duration: 10000,
                        message: "Ricetta salvata!",
                        className: "alert-success",
                        position: 'center'
                    })
                    $state.go('ricette')



                })
        }

        $scope.aggiungi = function () {
            var ing = $scope.ingrediente
            $scope.ricetta.ingredienti.push(ing)
        }
        $scope.cancella = function (id) {
            var indice = $scope.ricetta.ingredienti.findIndex(ing => ing._id == id)
            $scope.ricetta.ingredienti.splice(indice, 1)
        }

        $scope.deleteOne = function (id) {
            RicetteService.deleteOne(id)
                .then(risposta => {

                    toast({
                        duration: 10000,
                        message: "Ricetta eliminata!",
                        className: "alert-danger",
                        position: 'center'
                    })
                    $state.go('ricette')
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








