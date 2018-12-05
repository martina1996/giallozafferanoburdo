angular.module('app')
    .filter('maiuscolo', function () {
        return function (input) {
            return input.toUpperCase()
        }
    })



    .filter('filterAllergene', function () {

        return function (input, allergene) {
            if (allergene == undefined) return input;
            if (allergene == "true") {
                return input.filter(function (ricetta) {
                    return ricetta.ingredienti.some(function (ingrediente) {
                        return ingrediente.allergene == true
                    })
                })

            }
            if (allergene == "false") {
                return input.filter(function (ricetta) {
                    return ricetta.ingredienti.every(function (ingrediente) {
                        return ingrediente.allergene == false
                    })
                })
            }
        }
    })









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