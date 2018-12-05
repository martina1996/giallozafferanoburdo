angular.module('app')
    // .controller('ricetteController', function ($scope, RicetteService, IngredientiService) {
    .controller('homeController', function ($scope, ricette) {

        $scope.ricette = ricette;
        

        this.slides = [
            {
                title: "1 title",
                image: 'http://lorempixel.com/560/400/sports/1',
            },
            {
                title: "2 title",
                image: 'http://lorempixel.com/560/400/sports/2',
            },
            {
                title: "3 title",
                image: 'http://lorempixel.com/560/400/sports/3',
            },
            {
                title: "4 title",
                image: 'http://lorempixel.com/560/400/sports/4',
            },
            {
                title: "5 title",
                image: 'http://lorempixel.com/560/400/sports/5',
            },
        ];




















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






