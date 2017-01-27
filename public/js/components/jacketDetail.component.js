eApp.component('jacketDetail', {
    templateUrl: './views/components/jacketDetail.html',
    controller: ['$http', '$routeParams', function JacketListController($http, $routeParams){
        var self = this;

        $http.get('jackets/' + $routeParams.jacketId + '.json').then(function(response){
            console.log(response.data);
            self.jackets = response.data;
        })
    }
  ]
})
