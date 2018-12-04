angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        // toglie il #!
        $locationProvider.html5Mode(true).hashPrefix('!')
        // redirect alla home se non trova url
        $urlRouterProvider.otherwise('/')

        $urlRouterProvider.when('','/')

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/public/app/home/homeTemplate.html',
                controller: 'homeController',
                resolve: {
                    ricette: async function (RicetteService) {
                        var risposta = await RicetteService.getAll()
                        return risposta.data;
                    },
                    ingredienti: async function (IngredientiService) {
                        var risposta = await IngredientiService.getAll()
                        return risposta.data;
                    }
            }
        })
        $stateProvider
            .state('ricette', {
                url: '/ricette',
                templateUrl: '/public/app/ricette/ricetteTemplate.html',
                controller: 'ricetteController',
                resolve: {
                    ricette: async function (RicetteService) {
                        var risposta = await RicetteService.getAll()
                        return risposta.data;
                    },
                
                    ingredienti: async function (IngredientiService) {
                        var risposta = await IngredientiService.getAll()
                        return risposta.data;
                    }
                }
            })
            .state('ricetta', {
                url: '/ricette/{id:[0-9a-f]{24}}',
                // url: '/ricette/{ciccio:[0-9a-f]{24}}',
                templateUrl: '/public/app/ricette/ricettaTemplate.html',
                controller: 'ricettaController',
                resolve: {
                    ricetta: async function (RicetteService, $stateParams) {
                        var risposta = await RicetteService.getOne($stateParams.id)
                        // var risposta = await RicetteService.getOne($stateParams.ciccio)
                        return risposta.data;
                    }
                }
               })










})