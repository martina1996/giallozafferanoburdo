angular.module('app')
    .filter('maiuscolo', function(){
        return function(input){
            return input.toUpperCase()
        }})

    // .filter('capitali', function () {
    //             return function (input) {
    //                 return input.toUpperCase()
    //             }
    // })