angular.module('eApp')
    .service('mainService', function($http, $routeParams){
        this.getJackets = function(){
            return $http.get('jackets/' + $routeParams.jacketId + '.json');
        }

        this.getJacketList = function(){
            return $http.get('jackets/jacketList.json');
        }
    })
