angular.module('eApp')
    .service('mainService', function($http, $routeParams){

        this.getJackets = function(){
            return $http.get('jackets/' + $routeParams.jacketId + '.json');
        }

        this.getJacketList = function(){
            return $http.get('jackets/jacketList.json');
        }

        this.createEmail = function(email){
            return $http.post('http://localhost:9000/api/email');
        }


    })
