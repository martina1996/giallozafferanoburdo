angular.module('app')
    .filter('maiuscolo', function(){
        return function(input){
            return input.toUpperCase()
        }})

    // .filter('filtraPortata', function(){
    //     return function(input, portata){
    //         if (!portata) return input
    //         return input.filter(el => {
    //             return el.portata.includes(portata)
    //         })
    //     }})

    // .filter('capitali', function () {
    //             return function (input) {
    //                 return input.toUpperCase()
    //             }
    // })