angular.module('jackets')
    .component('jackets', {
        templateUrl: 'jacketComponent/jackets.component.html',
        controller: function JacketsController($http){
            var self = this;
            $http.get('jackets/jacketList.json').then(function(response){
                self.jacketList = response.data;
            })
        }
    })
