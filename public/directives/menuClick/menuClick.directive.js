angular.module('eApp')
    .directive('menuHover', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                element.on('click', function(){
                    $('.drop-container').slideToggle('fast');
                })
            }
        }
    })
