angular.module('app')
    .filter('maiuscolo', function(){
        return function(input){
            return input.toUpperCase()
        }
    })