angular.module('jacketDetail')
.component('jacketDetail', {
    templateUrl: 'jacketDetailComponent/jacketDetail.component.html',
    controller: ['$http','$routeParams', function JacketDetailController($http, $routeParams){
        var self = this;

        $http.get('jackets/' + $routeParams.jacketId + '.json').then(function(response){
            console.log(response.data);
            self.jackets = response.data[0];
        })
    }
  ]
})
