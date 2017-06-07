angular.module('eApp')
    .directive('sortClick', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                var $dropContainer = $('.sort-container');
                var $sortDrop = $('.sort-drop');

                element.on('click', function(){
                    $sortDrop.slideToggle('fast');
                    console.log('clicked');
                })

                //CLOSE MENU IF LINK IS CLICKED
                // $dropContainer.find('a').on('click', function(){
                //     $dropContainer.slideUp('fast');
                // })
                //
                // $dropContainer.on('mouseleave', function(){
                //     $dropContainer.slideUp('fast');
                // })
            }
        }
    })
