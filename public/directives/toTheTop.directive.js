angular.module('eApp')
    .directive('toTheTop', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                element.on('click', function(){
                    console.log('clicked')
                    $('html,body').animate({scrollTop: 0},"slow");
                })
            }

        }
    })
