angular.module('eApp')
    .component('productReviewsComponent', {
        templateUrl: './productReviewsComponent/productReviews.component.html',
        controller:  function($http, $routeParams){
            var self = this;

            $http.get('jackets/' + $routeParams.jacketId + '.json').then(function(response){
                console.log(response.data);
                self.jackets = response.data[0];
            })
        }
    })
