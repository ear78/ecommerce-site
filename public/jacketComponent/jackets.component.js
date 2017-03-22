angular.module('jackets')
    .component('jackets', {
        templateUrl: 'jacketComponent/jackets.component.html',
        controller: function JacketsController($http){
            this.order = "price";
            var self = this;

            // GETTING JACKET LIST FROM JSON FILE
            $http.get('jackets/jacketList.json').then(function(response){
                self.jacketList = response.data;
            })
        }
    })
