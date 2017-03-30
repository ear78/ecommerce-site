angular.module('jacketDetail')
.component('jacketDetail', {
    templateUrl: 'jacketDetailComponent/jacketDetail.component.html',
    controller: function JacketDetailController($http, $routeParams, mainService){
        var self = this;

        mainService.getJackets().then(function(response){
            self.jackets = response.data[0];
        })

    }
})
