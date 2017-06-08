angular.module('eApp')
    .directive('sortClick', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                var $dropContainer = $('.sort-container');
                var $sortDrop = $('.sort-drop');

                element.on('click', function(){
                    $sortDrop.slideToggle('fast');
                })

                element.on('mouseleave', function(){
                    $sortDrop.slideUp('fast');
                })

            }
        }
    })
