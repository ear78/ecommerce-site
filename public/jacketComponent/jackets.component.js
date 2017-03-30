angular.module('jackets')
    .component('jackets', {
        templateUrl: 'jacketComponent/jackets.component.html',
        controller: function JacketsController($http, mainService){
            this.order = "price";
            var self = this;

            // GETTING JACKET LIST FROM JSON FILE
            mainService.getJacketList().then(function(response){
                self.jacketList = response.data;
            })
        }
    })
