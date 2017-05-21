angular.module('jacketDetail')
.component('jacketDetail', {
    templateUrl: './components/jacketDetailComponent/jacketDetail.component.html',
    controller: function JacketDetailController($http, $routeParams, mainService){
        var self = this;

        self.addToCart = function(product){
            console.log(product, 'in jacketdetail');
            mainService.addToCartArray(product);
        }

        mainService.getJackets().then(function(response){
            self.jackets = response.data[0];
        })

    }
})
