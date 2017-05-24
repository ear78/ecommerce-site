angular.module('eApp')
    .component('titleComponent', {
        templateUrl: "./components/titleComponent/title.component.html",
        controller: function($route, $location){
            var self = this;
            this.$route = $route;

            
        }
    })
