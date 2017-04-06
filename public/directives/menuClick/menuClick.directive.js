angular.module('eApp')
    .directive('menuHover', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                var $dropContainer = $('.drop-container');

                element.on('click', function(){
                    $('.drop-container').slideToggle('fast');
                })

                //CLOSE MENU IF LINK IS CLICKED
                $dropContainer.find('a').on('click', function(){
                    $dropContainer.slideUp('fast');
                })

                $dropContainer.on('mouseleave', function(){
                    $dropContainer.slideUp('fast');
                })
            }
        }
    })
